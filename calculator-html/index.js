// Variables to access elements from html
let calcScreen = document.getElementById('result');
let numbersKeys = document.getElementsByClassName('number');
let operatorsKeys = document.getElementsByClassName('operator');
let equal_toKey = document.getElementById('equal_to');
let acKey = document.getElementById('ac');
let zeroKey = document.getElementById('zero');
let eraseKey = document.getElementById('erase');

// Variables to control the logic of the calculations, operations order and buttons 'permissions' 
let numFormed = '';
let numsString = '';
let numsArray = [];
iniciateCalcCount = 0;

// This is the main function. It'll control the calculator screen, the buttons actions and results.
function showNumberDialed() {

    let userInput = this.innerText;

    // LOGIC 1 - First digit by user. Only three options allowed: number, point and '-'.
    if(iniciateCalcCount === 0 && calcScreen.innerText === '0') {

        switch(true) {
            // Insert num.
            case(!isNaN(userInput)):
                calcScreen.innerText = userInput;
                numsString += userInput;
                numFormed += userInput;
                iniciateCalcCount += 1;
                userInput = '';
                break;

            // Insert dot for decimal nums.
            case(userInput === ','):
                userInput = '.'
                calcScreen.innerText = userInput;
                numsString += userInput;
                numFormed += userInput;
                iniciateCalcCount += 1;
                userInput = '';
                break;
            
            // Minus signal
            case(userInput === '-'):
                calcScreen.innerText = userInput;
                numsString += userInput;
                numFormed += userInput;
                iniciateCalcCount += 1;
                userInput = '';
                break;
        }
    
    // LOGIC 2 - From second digit onwards we enter this part that will allow all keys. We'll remain on this part of the logic until we hit '=', than we'll go into LOGIC 3.
    }else if(iniciateCalcCount > 0) {

        // If current input is an operator and previous input was an operator reset 'userInput'.
        if(userInput === '÷' || userInput === 'x' || userInput === '-' || userInput === '+') {
            switch(numsString[numsString.length-1]) {
                case '÷':
                case 'x':
                case '-':
                case '+':
                    userInput = '';
                    iniciateCalcCount += 1;
                    break;
            };
        };
        
        switch(true) {
            // Number
            case(!isNaN(userInput)):
                // Limit numFormed to 9 chars and calcScreen to 18 characters
                if(numFormed.length < 9 && calcScreen.innerText.length < 18) {
                    calcScreen.innerText += userInput;
                    numsString += userInput;
                    numFormed += userInput;
                    userInput = '';
                }
                break;
            
            // Dot for decimal number.
            case(userInput === ','):
                if(numFormed.length < 9 && calcScreen.innerText.length < 18) {
                    // Only allow the insert of 1 point in each numFormed
                    if(!numFormed.includes('.')) {
                        userInput = '.'
                        calcScreen.innerText += userInput;
                        numsString += userInput;
                        numFormed += userInput;
                        userInput = '';
                        calcScreen.scrollLeft += 1000;
                    }
                }
                break;   

            // Operators.
            case(userInput == '÷' || userInput == 'x' || userInput == '-' || userInput == '+'):
                if(calcScreen.innerText[calcScreen.innerText.length-1] != '.') {
                    if(calcScreen.innerText.length < 18) {
                        calcScreen.innerText += userInput;
                        numsString += userInput;
                        if(numFormed != '') {
                            numsArray.push(numFormed);
                        }
                        numsArray.push(userInput)
                        numFormed = '';
                        userInput = '';
                    }
                }
                break;

            // Erase last digit.
            case(userInput === '↺'):
                if(numsArray.length > 0){
                    // If the last character of the last element of numsArray is equal to the last character of numsString, call removeLastChar().
                    if(numsArray[numsArray.length-1][numsArray[numsArray.length-1].length-1] === numsString[numsString.length-1]) {
                        removeLastChar(numsArray);
                    };
                };
                calcScreen.innerText = calcScreen.innerText.slice(0, -1);
                numsString = numsString.slice(0, -1);
                numFormed = numFormed.slice(0, -1);
                break;
            
            // Erase all.
            case(userInput === 'AC'):
                calcScreen.innerText = '0';
                iniciateCalcCount = 0;
                userInput = numFormed = numsString = '';
                numsArray = [];
                break;

            // Calculate.
            case(userInput === '='):

                if(numFormed != '' && numFormed != '.') {
                    numsArray.push(numFormed);
                }
                // This will only call makeCalculations() if last element in numsArray is not NaN (i.e. +, -, x or ÷ ).
                if(!isNaN(numsArray[numsArray.length-1])) {
                    makeCalculations();
                }
                break;
        }
    
    // LOGIC 3 - This part will handle the first pass after the user enters '='. Here we only allow numbers, operators and 'erase all'.
    }else if(iniciateCalcCount === 0 && calcScreen.innerText != '0') {

        switch(true) {
            // Number. In this option we'll 'reset' the calculator.
            case(!isNaN(userInput)):
                numsArray = [];
                calcScreen.innerText = userInput;
                numsString += userInput;
                numFormed += userInput;
                iniciateCalcCount += 1;
                userInput = '';
                iniciateCalcCount = 1;
                break;

            // Operators. Here we'll keep the result from previous calculation as a starting point.
            case(userInput == '÷' || userInput == 'x' || userInput == '-' || userInput == '+'):
                if(!calcScreen.innerText.includes('e')) {
                    // Store result from previous calculation in numsArray.
                    numsArray.push(calcScreen.innerText);

                    calcScreen.innerText += userInput;
                    numsString += userInput;

                    if(numFormed != '') {
                        numsArray.push(numFormed);
                    }
                    numsArray.push(userInput)
                    numFormed = '';
                    iniciateCalcCount += 1;
                    userInput = '';
                }
                break;
            
            // Erase all. This will go back to LOGIC 1.
            case(userInput === 'AC'):
                calcScreen.innerText = '0';
                iniciateCalcCount = 0;
                userInput = numFormed = numsString = '';
                numsArray = [];
                break;
        }
    }
    // This will control the size of the numbers depending on the length of calcScreen.innertext
    switch(true) {
        case calcScreen.innerText.length > 18:
            calcScreen.style.fontSize = '20px';
            break;
        case calcScreen.innerText.length > 15:
            calcScreen.style.fontSize = '25px';
            break;
        case calcScreen.innerText.length > 11:
            calcScreen.style.fontSize = '30px';
            break;
        default:
            calcScreen.style.fontSize = '40px';
    }
}

function removeLastChar(array) {
    for(let i = 0; i < array.length; i++) {
        if(i === array.length-1) {
            if(array[i].slice(0, -1) != '') {
                array.push(array[i].slice(0, -1));
            };
            array.splice(i, 1);
        };
    };
};

function buttonPressColor() {
    this.style.backgroundColor = 'grey';
};

function numberButtonReleaseColor() {
    this.style.backgroundColor = 'lightgray';
};

function operatorButtonReleaseColor() {
    this.style.backgroundColor = '#ff8000';
};

function makeCalculations () {

    let finalNums = []

    if(numsArray.length > 2) {
        
        // First we'll get rid of all multiplication and division
        while(numsArray.includes('x') || numsArray.includes('÷')) {
            
            let result;
            let elementIndex;

            for(let i = 0; i < numsArray.length; i++) {
                if(numsArray[i] === 'x') {
                    result = numsArray[i-1] * numsArray[i+1];
                    elementIndex = i-1;
                    numsArray.splice(elementIndex, 0, result) // add result of multiplication on the position of the first number of multiplication
                    numsArray.splice(i, 3) // remove numbers used on multiplication

                }else if(numsArray[i] === '÷') {
                    result = numsArray[i-1] / numsArray[i+1];
                    elementIndex = i-1;
                    numsArray.splice(elementIndex, 0, result) // add result of division on the position of the first number of multiplication
                    numsArray.splice(i, 3) // remove numbers used on division
                }
            }
        }
    }    
    
    finalNums.push(numsArray[0])
    
    // Concatenate operators with respective numbers
    for(let i = 1; i < numsArray.length; i++) {
        if(i % 2 === 0) {
        let numWithOperator = numsArray[i-1].concat(numsArray[i]);
        finalNums.push(numWithOperator)
        }
    }
        
    // This part will handle the sum and subtraction
    let finalNum = finalNums.reduce(function(total, currentNum){return Number(total) + Number(currentNum)})

    let transformedNumber = transformDecimals(finalNum)

    // If result is more than 10 characters, we'll change it to exponential format
    if(String(transformedNumber).length >= 10) {
        calcScreen.innerText = Number(transformedNumber).toExponential();
    } else {
        calcScreen.innerText = transformedNumber;
    }
    
    numFormed = '';
    numsString = '';
    numsArray = [];
    iniciateCalcCount = 0;
}

// Transform the amount of decimals on any number up to max 3 decimals.
function transformDecimals(num) {
    if(Math.floor(num) != num) {
        num = num.toString();
        if(num.split('.')[1].length > 3) {
            return Number(num).toFixed(3);            
        } else {
            return Number(num);
        }
    } else {
        return Number(num);        
    }
}

// Add events for calculator's buttons
for(let i = 0; i < numbersKeys.length; i++) {
    numbersKeys[i].addEventListener('click', showNumberDialed);
    numbersKeys[i].addEventListener('mousedown', buttonPressColor);
    numbersKeys[i].addEventListener('mouseup', numberButtonReleaseColor);
};

for(let i = 0; i < operatorsKeys.length; i++) {
    operatorsKeys[i].addEventListener('click', showNumberDialed);
    operatorsKeys[i].addEventListener('mousedown', buttonPressColor);
    operatorsKeys[i].addEventListener('mouseup', operatorButtonReleaseColor);
};

acKey.addEventListener('mousedown', buttonPressColor);
acKey.addEventListener('mouseup', numberButtonReleaseColor);
acKey.addEventListener('click', showNumberDialed);


zeroKey.addEventListener('click', showNumberDialed);
zeroKey.addEventListener('mousedown', buttonPressColor);
zeroKey.addEventListener('mouseup', numberButtonReleaseColor);

eraseKey.addEventListener('mousedown', buttonPressColor);
eraseKey.addEventListener('mouseup', numberButtonReleaseColor);
eraseKey.addEventListener('click', showNumberDialed);

equal_toKey.addEventListener('click', showNumberDialed);
equal_toKey.addEventListener('mousedown', buttonPressColor);
equal_toKey.addEventListener('mouseup', operatorButtonReleaseColor);

