let main = () => {

    let playerCard = new BingoCard();
    playerCard.populateColumns();

    console.table([playerCard.col1, playerCard.col2, playerCard.col3]);

    let _continue;

    // This variable will be used to alert player that one of the lines is complete with 'X'. After it changes from 0, the lineComplete() function won't be called again.
    let lineCount = 0;

    do {
        generateRandomNumber();
        console.log(num);

        [playerCard.col1, playerCard.col2, playerCard.col3].forEach(changeNumForX);
        console.table([playerCard.col1, playerCard.col2, playerCard.col3]);

        // This block will call lineComplete() function to alert player that he has completed one full line of the card. But it'll only be called once, hence the lineCount variable.
        console.log(lineCount)
        if(lineCount === 0) {
            [playerCard.col1, playerCard.col2, playerCard.col3].forEach(lineComplete);
            lineCount += 1;
        }

        if(bingo(playerCard.col1) && bingo(playerCard.col2) && bingo(playerCard.col3)) {
            alert('¡¡ ~~~ BINGOOOO~~~ !!!')
            return bingo(playerCard.col1);
        };

        _continue = window.confirm('Continue?')
        console.clear()
    }
    while(_continue != false || bingo === false);
}



// Array that will hold the bingo card's numbers
    let _nums = [];

    switch(true) {
        // This first case will be user to generate the numbers round after round to match the player card
        case amount === 1:
            _nums = Math.ceil(Math.random() * 60);
            return _nums; 
            break;
        // This second case will be used to generate the player's card at the beginning of the game. We can also choose how many numbers the card will have.
        case amount > 1:
            while(_nums.length < amount){
                _num = Math.ceil(Math.random() * 60);
                if(!_nums.includes(_num)) {
                    _nums.push(_num);
                }
            }
            return _nums;
            break;
    }