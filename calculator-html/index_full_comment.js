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

// Functions to show numbers/operators, erase characters and make calculations.

// This is the main function. It'll control the calculator screen, the buttons actions and results.
function showNumberDialed() {

    // Capture value dialed by user
    let userInput = this.innerText;

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
        if(userInput === '÷' || userInput === 'x' || userInput === '-' || userInput === '+') {
            switch(numsString[numsString.length-1]) {
                case '÷':
                case 'x':
                case '-':
                case '+':
                    userInput = ''
                    iniciateCalcCount += 1;
                    break;
            };
        };
        
        switch(true) {
            // Number
            case(!isNaN(userInput)):
                // Limit calcScreen to 10 characters
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
                calcScreen.innerText = userInput = numFormed = numsString = '';
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
    
    // LOGIC 3 - This part will handle the first pass after the user enters '='. Here we only allow numbers, operators and 'erase all'. After the first perss of any of those keys the programm goes back to LOGIC 2.
    }else if(iniciateCalcCount === 0 && calcScreen.innerText != '0') {

        switch(true) {
            // Number. In this option we'll 'reset' the calculator.
            case(!isNaN(userInput)):
                //calcScreen.style.fontSize = '40px';
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

                    //calcScreen.style.fontSize = '40px';

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
                //calcScreen.innerText = '';
                break;
            
            // Erase all.
            case(userInput === 'AC'):
                //calcScreen.style.fontSize = '40px';
                calcScreen.innerText = userInput = numFormed = numsString = '';
                numsArray = [];
                iniciateCalcCount = 1;
                break;
        }
    }
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

function makeCalculations () {

    console.log(numsArray)

    let finalNums = []

    if(numsArray.length > 2) {
  
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
    console.log(numsArray)
    
    // Add first number to 'iniciate' final array that will be used to calculate final number
    finalNums.push(numsArray[0])
    
    // Concatenate operators with respective numbers and add them to final array (finalnums)
    for(let i = 1; i < numsArray.length; i++) {
        if(i % 2 === 0) {
        let numWithOperator = numsArray[i-1].concat(numsArray[i]);
        finalNums.push(numWithOperator)
        }
    }
        
    // Final sum
    let finalNum = finalNums.reduce(function(total, currentNum){return Number(total) + Number(currentNum)})
            
    console.log(finalNum)

    let transformedNumber = transformDecimals(finalNum)

    // If result is too big to be shown on screen, we'll change it to exponential format
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
    // If num has decimals,...
    if(Math.floor(num) != num) {

        // Transform number to string in order to be able to split it.
        num = num.toString();

        //...we'll split the number on '.', count it's decimals, and if it's more than 3, we'll get it fixed to 3.
        if(num.split('.')[1].length > 3) {
            return Number(num).toFixed(3);
            
        // If the amount of decimals is less than 3, return the number as it is.
        } else {
            return Number(num);
        }
    // If there's no decimals on the number, return the number as it is.
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

