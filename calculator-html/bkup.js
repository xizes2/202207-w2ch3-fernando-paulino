// Variables to access elements from html
let supportCalcScreen = document.getElementById('support_screen');
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

// Functions to show numbers/operators, erase characters and make calculations.

// This is the main function. It'll control the calculator screen, the buttons actions and results.
function showNumberDialed() {

    let userInput = this.innerText;
    calcScreen.style.fontSize = '40px';

    // LOGIC 1 - First digit by user.
    if(iniciateCalcCount === 0 && calcScreen.innerText === '0') {

        // Test for input, only two options allowed: number and point.
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
        }
    
    // LOGIC 2 - From second digit onwards we enter this part that will allow all keys. We'll remain on this part of the logic until we hit '=', than we'll go into LOGIC 3.
    }else if(iniciateCalcCount > 0) {

        // If current input is an operator and previous input was an operator reset 'userInput'.
        if(userInput === '÷' || userInput === 'x' || userInput === '-' || userInput === '+' || userInput === '.') {
            switch(numsString[numsString.length-1]) {
                case '÷':
                case 'x':
                case '-':
                case '+':
                case '.':
                    userInput = ''
                    iniciateCalcCount += 1;
                    break;
            };
        };
        
        switch(true) {
            // Number
            case(!isNaN(userInput)):
                // Limit supportCalcScreen to 24 chars
                if((supportCalcScreen.innerText.length + numFormed.length) < 21) {
                    // Limit calcScreen to 10 characters
                    if(numFormed.length <= 9) {
                        calcScreen.innerText += userInput;
                        numsString += userInput;
                        numFormed += userInput;
                        userInput = '';
                        // Keep scrollbar at the end.
                        //calcScreen.scrollLeft += 1000;
                    }
                }
                break;
            
            // Dot for decimal number.
            case(userInput === ','):
                if((supportCalcScreen.innerText.length + numFormed.length) < 21) {
                    if(numFormed.length <= 9) {
                        if(!numFormed.includes('.')) {
                            userInput = '.'
                            calcScreen.innerText += userInput;
                            numsString += userInput;
                            numFormed += userInput;
                            userInput = '';
                            calcScreen.scrollLeft += 1000;
                        }
                    }
                }
                break;  

            // Operators.
            case(userInput == '÷' || userInput == 'x' || userInput == '-' || userInput == '+'):
                if((supportCalcScreen.innerText.length + numFormed.length) < 21) {
                    calcScreen.innerText = '';
                    numsString += userInput;
                    if(numFormed != '') {
                        numsArray.push(numFormed);
                        supportCalcScreen.innerText += numFormed;
                    }
                    numsArray.push(userInput);
                    supportCalcScreen.innerText += userInput;
                    numFormed = '';
                    userInput = '';
                    //calcScreen.scrollLeft += 1000;
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
                calcScreen.innerText = supportCalcScreen.innerText = userInput = numFormed = numsString = '';
                numsArray = [];
                break;

            // Calculate.
            case(userInput === '='):
                calcScreen.innerText = '';
                if(numFormed != '') {
                    numsArray.push(numFormed);
                    supportCalcScreen.innerText += numFormed;
                }
                // This will only call makeCalculations() if last element in numsArray is not NaN (i.e. +, -, x or ÷ ).
                if(!isNaN(numsArray[numsArray.length-1])) {
                    // 'Reset' scrollbar to position 0.
                    //calcScreen.scrollLeft = 0;

                    makeCalculations();
                }
                break;
        }
    
    // LOGIC 3 - This part will handle the first pass after the user enters '='. Here we only allow numbers, operators and 'erase all'. After the first pass of any of those keys the programm goes back to LOGIC 2.
    }else if(iniciateCalcCount === 0 && calcScreen.innerText != '0') {
        
        switch(true) {
            // Number. In this option we'll 'reset' the calculator.
            case(!isNaN(userInput)):
                numsArray = [];
                supportCalcScreen.innerText = '';
                calcScreen.innerText = userInput;
                numsString += userInput;
                numFormed += userInput;
                iniciateCalcCount += 1;
                userInput = '';
                iniciateCalcCount = 1;
                break;

            // Operators. Here we'll keep the result from previous calculation as a starting point, if the result it's not exponential
            case(userInput == '÷' || userInput == 'x' || userInput == '-' || userInput == '+'):
                if(!calcScreen.innerText.includes('e')) {
                    supportCalcScreen.innerText = calcScreen.innerText;
                    supportCalcScreen.innerText += userInput;                

                    // Store result from previous calculation in numsArray.
                    numsArray.push(calcScreen.innerText);

                    //calcScreen.innerText += userInput;
                    numsString += userInput;
                    if(numFormed != '') {
                        numsArray.push(numFormed);
                    }
                    numsArray.push(userInput)
                    
                } else {
                    supportCalcScreen.innerText = '';
                }
                calcScreen.innerText = '';
                numFormed = '';
                iniciateCalcCount += 1;
                userInput = '';
                break;
            
            // Erase all.
            case(userInput === 'AC' || userInput === '↺'):
                calcScreen.innerText = supportCalcScreen.innerText = userInput = numFormed = numsString = '';
                numsArray = [];
                iniciateCalcCount = 1;
                break;
        }
    }
}

// Access last element from array and remove last character from last element.
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

// This function will follow the mathmatics order of operations: first division/multiplication and then subtraction/sum
function makeCalculations () {
    console.log(numsArray)
    if(numsArray.length > 2) {
  
        while(numsArray.includes('x') || numsArray.includes('÷')) {
            
            let result;
            let elementIndex;

            for(let i = 0; i < numsArray.length; i++) {
                if(numsArray[i] === 'x') {
                    result = numsArray[i-1] * numsArray[i+1];
                    elementIndex = i-1;
                    numsArray.splice(elementIndex, 0, result) // add result of multiplication on the position of the first number of multiplication
                    numsArray.splice(i, 3) // remove numbers and operator used on multiplication

                }else if(numsArray[i] === '÷') {
                    result = numsArray[i-1] / numsArray[i+1];
                    elementIndex = i-1;
                    numsArray.splice(elementIndex, 0, result) // add result of division on the position of the first number of multiplication
                    numsArray.splice(i, 3) // remove numbers and operator used on division
                }
            }
        }

        while(numsArray.includes('+') || numsArray.includes('-')) {
            
            for(let i = 0; i < numsArray.length; i++) {
                if(numsArray[i] === '+') {
                    result = Number(numsArray[i-1]) + Number(numsArray[i+1]);
                    elementIndex = i-1;
                    numsArray.splice(elementIndex, 0, result) // add result of sum on the position of the first number of sum
                    numsArray.splice(i, 3) // remove numbers and operator used on sum

                }else if(numsArray[i] === '-') {
                    result = Number(numsArray[i-1]) - Number(numsArray[i+1]);
                    elementIndex = i-1;
                    numsArray.splice(elementIndex, 0, result) // add result of subtraction on the position of the first number of multiplication
                    numsArray.splice(i, 3) // remove numbers and operator used on subtraction
                }
            }
        }
    }
    let transformedNumber = transformDecimals(numsArray[0])

    // If result is too big to be shown on screen, we'll change it to exponential format
    if(String(transformedNumber).length >= 10) {
        console.log(transformedNumber)
        calcScreen.style.fontSize = '28px';
        calcScreen.innerText = transformDecimals(numsArray[0]).toExponential();
    } else {
        calcScreen.innerText = transformDecimals(numsArray[0]);
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
