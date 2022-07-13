const welcome = () => {
    alert(`WELCOME TO THE BINGO GAME!!!`)

    let playerName;
    while(playerName === undefined || playerName === null || playerName === '') {
        playerName = prompt('Please, be a honey and type your name, sweetie ;) :')
    }
    alert(`On the next message we'll check the rules, ${playerName}.`)
    return playerName
}

const rules = () => {
    alert('RULES:\n\nThe system will present your card with 15 random numbers between 1 and 60 (both inclusive). You can accept the card or reject, if you want another card.\n\n After that we"ll enter the game. Each round a random number will be drawed and you"ll have to confirm, to pass to next round, or hit "Cancel" to exit the game.\n\nIf the number drawed it"s on your card it"ll be marked with an "X".\n\nThe more rounds you need to complete the card, the less points you earn.\n\nGood luck!')
}

let num;
let drawedNums = [];

// Generate the random number at each round when the game starts. We're considering numbers from 1 - 60. It'll also push each drawed number into an array so we can control if the number was drawed already or not.
let generateRandomNumber = () => {

    num = Math.ceil(Math.random() * 60)

    while(drawedNums.includes(num)) {
        num = Math.ceil(Math.random() * 60);
    }
    
    drawedNums.push(num);

    alert(`The drawed number is: ${num}!`);
    console.log(num);
    return num
}

// Constructor for the bingo card. We have 3 empty arrays that will represent the columns of the card. Then we have a function to populate these columns without repeating the numbers.
function BingoCard() {
    this.col1 = [],
    this.col2 = [],
    this.col3 = [],
    this.populateColumns = function() {
        // These while loops will test for the length of each column. We set the length to 5 numbers.
        while(this.col1.length < 5){
            let num = Math.ceil(Math.random() * 60);
            // The 'if' statement will test if the numbers are repeated inside col1 and on the other 'if' they will test for themselves as well as for the previous columns.
            if(!this.col1.includes(num)) {
                this.col1.push(num);
            }
        }
        while(this.col2.length < 5){
            num = Math.ceil(Math.random() * 60);
            if(!this.col2.includes(num) && !this.col1.includes(num)) {
                this.col2.push(num);
            }
        }
        while(this.col3.length < 5){
            num = Math.ceil(Math.random() * 60);
            if(!this.col3.includes(num) && !this.col1.includes(num) && !this.col2.includes(num)) {
                this.col3.push(num);
            }
        }
    }
}

// This will substitute the number drawed by an 'X' on the player's card, if this number is present on the card.
let changeNumForX = numbersArray => {
    if(numbersArray.includes(num)) {
        numbersArray[numbersArray.indexOf(num)] = 'X'
    } 
}

// This function will alert player when one of the lines is complete with the 'X'.
let lineComplete = numbersArray => {
    if(numbersArray.every(elem => elem === 'X')) {
        alert('¡¡ LINE !!')
        return true;
    }
}

// This will test if all elements in an array are equal to 'X'.
let bingo = numbersArray => {
    if(numbersArray.every(elem => elem === 'X')) {
        return true
    }
}

// Invented ranking
let ranking = [
    {name: 'Jules', roundsToBingo: 45},
    {name: 'Esther', roundsToBingo: 56},
    {name: 'Maria', roundsToBingo: 59},
    {name: 'James', roundsToBingo: 54},
    {name: 'Fink', roundsToBingo: 47},
];


let main = () => {

    let playerName = welcome();

    rules();
    
    let selectCard;
    let playerCard;
    
    // Ask player if he wants the current card or another one.
    do {
      playerCard = new BingoCard();
      playerCard.populateColumns();
      console.log(playerCard)
      console.table([playerCard.col1, playerCard.col2, playerCard.col3]);
      selectCard = confirm('OK to select this card, CANCEL to change card.');
      console.clear()
    }
    while(selectCard != true);

    console.table([playerCard.col1, playerCard.col2, playerCard.col3]);

    alert("Let's jump right in the game!");
    
    let gameRounds = 0;
    let lineCompleteCount = 0;
    let keepPLaying = true;
    
    // This loop is the main motor of the game. It'll keep looping until player hits 'cancel', at the end of each round, or when all the numbers are completed (BINGO).
    do {
        generateRandomNumber();
        
        // Look for number in each card's row and if number exists substitute it with an 'X', and log the updated card.
        [playerCard.col1, playerCard.col2, playerCard.col3].forEach(changeNumForX);
        console.table([playerCard.col1, playerCard.col2, playerCard.col3]);

        // This block will test the card for line completion using lineComplete() function. It'll only be called once.
        if(lineCompleteCount === 0) {
          for(line of [playerCard.col1, playerCard.col2, playerCard.col3]) {
            if(lineComplete(line)){
              lineCompleteCount += 1;  
            }
          }  
        } 
        
        // Verify for the completion of the whole card (BINGO), prepare and show sorted ranking.
        if(bingo(playerCard.col1) && bingo(playerCard.col2) && bingo(playerCard.col3)) {
            alert('¡¡¡ ~~~ BINGOOOO ~~~ !!!')
            alert(`Remember, the more rounds the worse the result.\n\n${playerName}, you BINGOED after ${gameRounds} rounds.`);
            
            ranking.push({name: playerName, roundsToBingo: gameRounds})
            let sortedRanking = ranking.sort((a,b) => a.roundsToBingo - b.roundsToBingo);

            let finalRanking ='';
            let rankPosition = 1;

            for(player of sortedRanking) {
                finalRanking += `#${rankPosition}, ${player.name} - rounds to Bingo: ${player.roundsToBingo}\n`;
                rankPosition ++;
            };

            alert('Ranking:\n\n' + finalRanking)
            keepPLaying = false;
        } else {
            keepPLaying = window.confirm('Continue?')
            gameRounds += 1;
        }
    }
    while(keepPLaying === true);

    alert('Thanks for playing!')
}

main();



