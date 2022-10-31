// fetched elements
const addition = document.querySelector(".add");
const subtraction = document.querySelector(".sub");
const multiplication = document.querySelector(".mul");
const division = document.querySelector(".div");
const clearBtn = document.querySelector(".clear-btn");
let firstInput = document.querySelector("#first-input");
let secondInput = document.querySelector("#second-input");
let result = document.querySelector(".math-result");
let errMsg1 = document.querySelector(".first-input-err");
let errMsg2 = document.querySelector(".second-input-err");
let saveBtn = document.querySelector(".save-btn");
let savedCal = document.querySelector(".saved-cal");
let clickedOperation;

// click event listeners on fetched elements
addition.addEventListener("click", () => {
    let firstInput = parseFloat(document.querySelector("#first-input").value);
    let secondInput = parseFloat(document.querySelector("#second-input").value);
    let result = document.querySelector(".math-result");

    const sum = firstInput + secondInput;
    result.textContent = sum;
    clickedOperation = addition.textContent;

    checkInput();
});

subtraction.addEventListener("click", () => {
    let firstInput = parseFloat(document.querySelector("#first-input").value);
    let secondInput = parseFloat(document.querySelector("#second-input").value);
    let result = document.querySelector(".math-result");

    const difference = firstInput - secondInput;
    result.textContent = difference;
    clickedOperation = subtraction.textContent;

    checkInput();
});

multiplication.addEventListener("click", () => {
    let firstInput = parseFloat(document.querySelector("#first-input").value);
    let secondInput = parseFloat(document.querySelector("#second-input").value);
    let result = document.querySelector(".math-result");

    const product = firstInput * secondInput;
    result.textContent = product;
    clickedOperation = multiplication.textContent;

    checkInput();
});

division.addEventListener("click", () => {
    let firstInput = parseFloat(document.querySelector("#first-input").value);
    let secondInput = parseFloat(document.querySelector("#second-input").value);
    let result = document.querySelector(".math-result");

    const quotient = firstInput / secondInput;
    result.textContent = quotient;
    clickedOperation = division.textContent;

    checkInput();
});

clearBtn.addEventListener("click", () => {
    document.querySelector("#first-input").value = "";
    document.querySelector("#second-input").value = "";

    errMsg1.textContent = "";
    errMsg2.textContent = "";
    result.textContent = "";
});

// input event listeners on input elements
firstInput.addEventListener("input", () => {
    errMsg1.textContent = "";
});

secondInput.addEventListener("input", () => {
    errMsg2.textContent = "";
});

// check input function
function checkInput() {
    let firstInput = document.querySelector("#first-input").value;
    let secondInput = document.querySelector("#second-input").value;

    if (firstInput === "" && secondInput === "") {
        errMsg1.textContent = "Provide a value";
        errMsg2.textContent = "Provide a value";
        result.textContent = "";
    } else if (firstInput === "") {
        errMsg1.textContent = "Provide a value";
        result.textContent = "";
    } else if (firstInput != "" && secondInput != "") {
        errMsg1.textContent = "";
        errMsg2.textContent = "";
    } else if (secondInput === "") {
        errMsg2.textContent = "Provide a value";
        result.textContent = "";
    }
}

// save calculations
saveBtn.addEventListener("click", () => {
    let firstInputNum = parseFloat(document.querySelector("#first-input").value);
    let secondInputNum = parseFloat(document.querySelector("#second-input").value);
    let firstInput = document.querySelector("#first-input").value;
    let secondInput = document.querySelector("#second-input").value;
    const sum = `${firstInputNum} ${clickedOperation} ${secondInputNum}`;

    if (clickedOperation === undefined && secondInput === "" && firstInput === "") {
        savedCal.textContent += "";
    } 
    else if (firstInput === "" || secondInput === "") {
        savedCal.textContent += "";
    } else if (clickedOperation !== undefined  && secondInput === "" && firstInput === "") {
        savedCal.textContent += "";
    } 
    else {
        savedCal.textContent += `${sum} = ${result.textContent} || `;
        clickedOperation = undefined;
    }
});

