function main() {
    
    let num1;
    let num2;
    
    num1 = testNum();
        
    console.log(`Primero numero: ${num1}`)

    // Ask if user want to input second num...
    let secondNum = prompt('Quieres insertar otro numero? s/n:').toLowerCase();
    // Keep asking until answer is either 's' or 'n'.
    while(secondNum != 's' && secondNum != 'n') {
        secondNum = prompt('Quieres insertar otro numero? s/n:').toLowerCase();
    }
    
    if(secondNum === 's') {
        // ...if yes, test second num
        num2 = testNum();

        console.log(`Segundo numero: ${num2}`)

        // Create variable to hold operations results, test each result to number  of decimals
        let resultSum = transformDecimals(sum(num1, num2));
        let resultSub = transformDecimals(subtraction(num1, num2));
        let resultMult = transformDecimals(multiplication(num1, num2));
        let resultDiv = transformDecimals(division(num1, num2));

        // Alert results to user
        alert(`Suma: ${resultSum}\nResta: ${resultSub}\nMultiplicación: ${resultMult}\nDivisión: ${resultDiv}`)

        results.push(resultSum, resultSub, resultMult, resultDiv);

    // If user don't want to input second number, test square root of the first number for the number of decimals and print it
    } else {

        // If number is negative, alert user
        if(num1 < 0) {
          alert('Los números negativos no tienen raíces cuadradas reales')

        } else {
          // Create variable to receive the square root of num1 
          let num1sqrt = transformDecimals(Math.sqrt(num1));
          alert(`Raiz cuadrada: ${num1sqrt}`)

          results.push(num1sqrt)
        } 
    }

    // Ask if user want to do another operation...
    let repeat = prompt('Quieres hacer otra operación? s/n:').toLowerCase();
    // Keep asking until answer is either 's' or 'n'.
    while(repeat != 's' && repeat != 'n') {
        repeat = prompt('Quieres hacer otra operación? s/n:').toLowerCase();
    }

    if(repeat === 's') {
        main();
    }
}
