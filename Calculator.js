class Calculator {
    constructor(){
        this.numOne = "";
        this.numTwo = "";
        this.result = "";
        this.prevResult = "";
        this.operator = "";
    }

    add(){
        this.result = this.numOne + this.numTwo;
    }
    subtract(){
        this.result = this.numOne - this.numTwo
    }
    setNumOne(value){
        this.numOne += value;
    }
    setNumTwo(value){
        this.numTwo += value;
    }
    setOperator(operator){
        this.operator = operator;
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
                            <span class = "operator"> ${signObject[calculator.operator] || ""} </span>
                            ${calculator.numTwo}`
}


const numKeyHandler = (num) =>{
    if(calculator.operator)
        calculator.setNumTwo(num);
    else
       calculator.setNumOne(num);
    console.log(calculator.numOne)
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
            calculator.add()
            break;
        case "MODULO":
            calculator.add()
            break;
            
        default:
            break;
    }
}