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
}

const calculator = new Calculator();

const updateMainDisplay = () =>{
    const main = document.getElementById("main-display")
    main.innerText = calculator.operator ? calculator.numTwo : calculator.numOne;
}
const updateSecondaryDisplay = () =>{
    const secondary = document.getElementById("secondary-display")
    secondary.innerHTML = `<label class ="secondary-display">${calculator.numOne}
                            <span class = "operator">${calculator.operator}</span>
                            ${calculator.numTwo}</label>`
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