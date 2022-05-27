// fetched elements
const addition = document.querySelector('.add')
const subtraction = document.querySelector('.sub')
const multiplication = document.querySelector('.mul')
const division = document.querySelector('.div')
const clearBtn = document.querySelector('.clear-btn')
let firstInput = document.querySelector('#first-input')
let secondInput = document.querySelector('#second-input')
let result = document.querySelector('.math-result')
let errMsg1 = document.querySelector('.first-input-err')
let errMsg2 = document.querySelector('.second-input-err')
let saveBtn = document.querySelector('.save-btn')
let savedCal = document.querySelector('.saved-cal')

// click event listeners on fetched elements
saveBtn.addEventListener('click', () => {
    // let firstInput = document.querySelector('#first-input').value
    // let secondInput = document.querySelector('#second-input').value
    // let resultText = result.textContent

    // if (firstInput == '' && secondInput == '') {
    //     savedCal.textContent += ''
    // } else if (firstInput == '' || secondInput == '') {
    //     savedCal.textContent += ''
    // } else {
    //     savedCal.textContent += "Still to come"
    // }
    alert("This feature is yet to come.")
})

addition.addEventListener('click', () => {
    let firstInput = parseFloat(document.querySelector('#first-input').value)
    let secondInput = parseFloat(document.querySelector('#second-input').value)
    let result = document.querySelector('.math-result')

    const sum = firstInput + secondInput
    result.textContent = sum

    checkInput()
})

subtraction.addEventListener('click', () => {
    let firstInput = parseFloat(document.querySelector('#first-input').value)
    let secondInput = parseFloat(document.querySelector('#second-input').value)
    let result = document.querySelector('.math-result')

    const sum = firstInput - secondInput
    result.textContent = sum

    checkInput()
})

multiplication.addEventListener('click', () => {
    let firstInput = parseFloat(document.querySelector('#first-input').value)
    let secondInput = parseFloat(document.querySelector('#second-input').value)
    let result = document.querySelector('.math-result')

    const sum = firstInput * secondInput
    result.textContent = sum

    checkInput()
})

division.addEventListener('click', () => {
    let firstInput = parseFloat(document.querySelector('#first-input').value)
    let secondInput = parseFloat(document.querySelector('#second-input').value)
    let result = document.querySelector('.math-result')

    const sum = firstInput / secondInput
    result.textContent = sum

    checkInput()
})

clearBtn.addEventListener('click', () => {
    document.querySelector('#first-input').value = ''
    document.querySelector('#second-input').value = ''

    errMsg1.textContent = ''
    errMsg2.textContent = ''
    result.textContent = ''
})

// input event listeners on input elements
firstInput.addEventListener('input', () => {
    errMsg1.textContent = ''
})

secondInput.addEventListener('input', () => {
    errMsg2.textContent = ''
})

// check input function
function checkInput() {
    let firstInput = document.querySelector('#first-input').value
    let secondInput = document.querySelector('#second-input').value

    if (firstInput === '' && secondInput === '') {
        errMsg1.textContent = 'Provide a value'
        errMsg2.textContent = 'Provide a value'
        result.textContent = ''
    } else if (firstInput === '') {
        errMsg1.textContent = 'Provide a value'
        result.textContent = ''
    } else if (firstInput != '' && secondInput != '') {
        errMsg1.textContent = ''
        errMsg2.textContent = ''
    } else if (secondInput === '') {
        errMsg2.textContent = 'Provide a value'
        result.textContent = ''
    }
}
