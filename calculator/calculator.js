// We'll keep prompting the user until he types a number
function testNum(num) {
    while(isNaN(num) || num === '' || num === null) {
        num = prompt('Insertad un numero:')
    }
    return Number(num);
}

// Transform the amount of decimals on any number up to max 3 decimals.
function transformDecimals(num) {
    
    console.log(num)

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
function sum(numb1, numb2) {
    return numb1 + numb2;
}
function subtraction(numb1, numb2) {
    return numb1 - numb2;
}
function multiplication(numb1, numb2) {
    return numb1 * numb2;
}
function division(numb1, numb2) {
    return numb1 / numb2;
}

// Main function
function main() {
    
    let results = [];

    let num1;
    let num2;
    
    // Test first num
    num1 = testNum(num1);
    
    console.log(num1)

    // Ask if user want to input second num...
    let secondNum = prompt('Quieres insertar otro numero? s/n:');
    // Keep asking until answer is either 's' or 'n'.
    while(secondNum != 's' && secondNum != 'n') {
        secondNum = prompt('Quieres insertar otro numero? s/n:');
    }
    
    if(secondNum === 's') {
        // ...if yes, test second num
        num2 = testNum(num2);

        console.log(num2)

        // Create variable to hold operations results, test each result to number  of decimals
        let resultSum = transformDecimals(sum(num1, num2));
        let resultSub = transformDecimals(subtraction(num1, num2));
        let resultMult = transformDecimals(multiplication(num1, num2));
        let resultDiv = transformDecimals(division(num1, num2));

        // Log results to user
        console.log(`Suma: ${resultSum}\nResta: ${resultSub}\nMultiplicación: ${resultMult}\nDivisión: ${resultDiv}`)

        results.push(resultSum, resultSub, resultMult, resultDiv);

      // If user don't want to input second number, test square root of the first number for the number of decimals and print it
    } else {

        // Create variable to receive the square root of num1 
        let num1sqrt = transformDecimals(Math.sqrt(num1));
        console.log(num1sqrt)
    }
}

main()