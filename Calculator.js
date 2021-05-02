class Calculator {
    constructor(){
        this.numOne = "";
        this.numTwo = "";
        this.result = "";
        this.prevResult = "";
        this.operator = "";
    }

    add(){
        this.result = Number(this.numOne) + Number(this.numTwo);
    }
    subtract(){
        this.result = Number(this.numOne) - Number(this.numTwo);
    }
    multiply(){
        this.result = Number(this.numOne) * Number(this.numTwo);
    }
    divide(){
        this.result = Number(this.numOne) / Number(this.numTwo);
    }
    modulo(){
        this.result = Number(this.numOne) % Number(this.numTwo);
    }
    setNumOne(value){
        this.numOne += value;
    }
    setNumTwo(value){
        this.numTwo += value;
    }
    setOperator(operator){
        if(this.numOne)
            this.operator = operator;
        else{
            this.numOne = 0;
            this.operator = operator;
        }
    }
    clearCalculator(){
        this.numOne = "";
        this.numTwo = "";
        this.result = "";
        this.prevResult = "";
        this.operator = "";
    }
    changeSign(){
        this.numTwo ? this.numTwo = String(Number(this.numTwo) * -1) : this.numOne = String(Number(this.numOne) * -1);
    }
    undo(){
        this.numTwo ? this.numTwo = this.numTwo.substring(0,this.numTwo.length -1) : this.numOne = this.numOne.substring(0,this.numOne.length -1);
    }
}

const calculator = new Calculator();

const signObject = {
    ADD : "+",
    SUBTRACT : "-",
    MULTIPLY : "*",
    DIVIDE : "/",
    MODULO : "%",
    EQUAL : "="
}
const updateMainDisplay = () =>{
    const main = document.getElementById("main-display")
    main.innerText = calculator.operator ? calculator.numTwo || 0 : calculator.numOne || 0;
}
const updateSecondaryDisplay = () =>{
    const secondary = document.getElementById("secondary-display")
    secondary.innerHTML = `${calculator.numOne}
                            <span class = "dark operator"> ${signObject[calculator.operator] || ""} </span>
                            ${calculator.numTwo}`
}
const numKeyHandler = (num) =>{
    if(calculator.operator)
        calculator.setNumTwo(num);
    else
       calculator.setNumOne(num);
    updateMainDisplay();
    updateSecondaryDisplay();
}

const operatorKeyHandler = (operator) =>{
    calculator.setOperator(operator);
    updateMainDisplay();
    updateSecondaryDisplay();

}

const resultKeyHandler = () =>{
    switch (calculator.operator) {
        case "ADD":
            calculator.add()
            break;
        case "SUBTRACT":
            calculator.subtract()
            break;
        case "MULTIPLY":
            calculator.multiply()
            break;
        case "DIVIDE":
            calculator.divide()
            break;
        case "MODULO":
            calculator.modulo()
            break;
            
        default:
            break;
    }
    const main = document.getElementById("main-display")
    main.innerText = calculator.result;
}
const actionKeyHandler = (action) => {
    switch (action) {
        case 'ALLCLEAR':
            calculator.clearCalculator();
            break;
        case 'CHANGESIGN':
            calculator.changeSign();
            break;
        case 'UNDO':
            calculator.undo();
        default:
            break;
    }
    updateMainDisplay();
    updateSecondaryDisplay();
}


const themeChangeHandler = (theme) => {
    const mainContainer = document.getElementsByClassName('main-container')[0]
    const themeButtonBackground = document.getElementsByClassName("theme-button")[0]
    const sun = document.getElementById("sun")
    const moon = document.getElementById("moon")
    const displayText = document.getElementsByClassName("display-output-container")[0]
    const keypadContainer = document.getElementsByClassName("keypad-container")[0]
    const keys = document.querySelectorAll(".key")
    if(theme === "dark"){
        mainContainer.className = "main-container light";
        themeButtonBackground.className = "theme-button light";
        sun.className = "fa fa-sun-o day";
        moon.className = "fa fa-moon-o day non-selected";
        displayText.className = "display-output-container light";
        keypadContainer.className = "keypad-container light";
        for(var i = 0; i< keys.length;i++){
            if(keys[i].className === "key dark action"){
                keys[i].className = "key light action";
            }
            else if(keys[i].className === "key dark operator"){
                keys[i].className = "key light operator";
            }
            else
                keys[i].className = "key light";
        }
        
    }
    else{
        mainContainer.className = "main-container dark";
        themeButtonBackground.className = "theme-button dark";
        sun.className = "fa fa-sun-o night non-selected";
        moon.className = "fa fa-moon-o night";
        displayText.className = "display-output-container dark";
        keypadContainer.className = "keypad-container dark";
        for(var i = 0; i< keys.length;i++){
            if(keys[i].className === "key light action"){
                keys[i].className = "key dark action";
            }
            else if(keys[i].className === "key light operator"){
                keys[i].className = "key dark operator";
            }
            else
                keys[i].className = "key dark";
        }
    }
}