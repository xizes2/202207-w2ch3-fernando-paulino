// Create global variable to be exhibited after function main() 
let results = [];

// We'll keep prompting the user until he types a number
function testNum(num) {
    while(isNaN(num) || num === '' || num === null) {
        num =  prompt('Insertad un numero o "exit" para dejar el programa:')
        if(num === 'exit') {
            return 'exit'
        }
    }
    return Number(num);
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

// Operations functions
function sum(array) {

    let tot = array[0];

    for(let num of array.slice(1)) {
        tot += num;
    };

    return tot;
}
function subtraction(array) {

    let tot = array[0];

    for(let num of array.slice(1)) {
        tot -= num;
    };

    return tot;
}
function multiplication(array) {
    
    let tot = array[0];

    for(let num of array.slice(1)) {
        tot *= num;
    };

    return tot;
}
function division(array) {
    
    let tot = array[0];

    for(let num of array.slice(1)) {
        tot /= num;
    };

    return tot;
}

// Main function
function main() {
    
    let numsArray = [];
    let num;
    
    while(num != 'exit') {
        num = testNum();
        console.log(num)

        if(num != 'exit') {
            numsArray.push(num);
        }
    }

    console.log(numsArray)

    // Create variable to hold operations results, test each result to number  of decimals
    let resultSum = transformDecimals(sum(numsArray));
    let resultSub = transformDecimals(subtraction(numsArray));
    let resultMult = transformDecimals(multiplication(numsArray));
    let resultDiv = transformDecimals(division(numsArray));
    

    // Alert results to user
    alert(`Suma: ${resultSum}\nResta: ${resultSub}\nMultiplicación: ${resultMult}\nDivisión: ${resultDiv}`)

    results.push(resultSum, resultSub, resultMult, resultDiv);

}

main()
