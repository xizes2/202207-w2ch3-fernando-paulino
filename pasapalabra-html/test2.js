function checkIndex() {
    
    console.log('inside checkIndex');
    
    switch(true) {
        // If first and second players don't have any main questions pending...
        case firstPlayer.i >= questions.length && secondPlayer.i >= questions.length:
            //...teste if any of the players have passed questions pending, if so, call checkpassedQuestions(). If neither have pending passed questions, call ranking() and end game.
            switch(true) {
                case (firstPlayer.iQPassed < firstPlayer.qPassed.length || secondPlayer.iQPassed < secondPlayer.qPassed.length):
                    checkPassedQuestions();
                    break;
                default:
                    ranking(firstPlayer, secondPlayer);
                    document.write('Game Over');
                    break;
            }
            break;
        default:
            break;
    }
}


// Test if the current player index has 'ended' and show question
function ANTIGAshowQuestions() {

    console.log('inside showQuestions');

    // Check index to avoid breaking due to index out of reach
    checkIndex();
    
    // Change players if a player has answered all questions 
    if(playerObj.i >= questions.length) {
        changePlayers();
    }

    // Show player, letter, question
    playerBox.innerText = `Jugador ${playerObj.playerName}`;
    letterBox.innerText = `Letra: \n${questions[playerObj.i].letter.toUpperCase()}`
    questionBox.innerText = `${questions[playerObj.i].question[questions[playerObj.i].status]}.\n\nRespuesta: `;

    // Reset answer box and maintain cursor inside it
    answerBox.value = '';
    answerBox.focus();

    console.log(playerObj.playerName, playerObj.i)
}

// Check player's answer and act accordingly. After the answer, check the index in order to test the end of main questions block. Last step is to call showQuestions() again to continue the loop on the questions
function ANTIGAcheck() {

    console.log('inside check');

    let userAnswer = answerBox.value.toLowerCase()

    switch(true) {
        default:
            checkIndex();

            console.log(answer.value)
            console.log(playerObj)

            //let userAnswer = answerBox.value.toLowerCase()

            switch(userAnswer) {

        /* Finish game - If answer is 'end': 
            .break and end game
        */
        case 'end':
            playerObj.end += 1;
            ranking(firstPlayer, secondPlayer)
            break;

        /* Pass question - If answer is 'pasapalabra':
            .alert passed the question
            .add 1 to 'status' in order to loop the different questions on each letter
            .add question to player property 'qPasadas' (questions passed)
            .add 1 to current player index count 
            .reasign the 'player' variable to the other player to change turn
        */
        case 'pasapalabra':
            alert('Pasaste esta.')
            questions[playerObj.i].status++ 
            playerObj.qPassed.push(questions[playerObj.i]);
            playerObj.i++;
            if(playerObj === firstPlayer){
                playerObj = secondPlayer;
            } else {
                playerObj = firstPlayer;
            };
            break;

        /* Correct answer: 
            .add 1 point to player 'points' property
            .add 1 to 'status' in order to loop the different questions on each letter
            .add 1 to current player index count
            .alert correct answer
        */
        case questions[playerObj.i].answer[questions[playerObj.i].status]:
            playerObj.points += 1;
            questions[playerObj.i].status++
            playerObj.i++;
            alert(`Correcto!!! Tienes ${playerObj.points} puntos.`);
            break;

        /* Wrong answer: 
            .add 1 point to the 'fails' property of the player
            .alert incorrect answer with the correct one in UPPER CASE
            .add 1 to 'status' in order to loop the different questions on each letter
            .add 1 to current player index count
            .reasign the 'player' variable to the other player to change turn
        */
        default:
            playerObj.fails += 1;
            alert(`Incorrecto! La respuesta correcta es: ${questions[playerObj.i].answer[questions[playerObj.i].status].toUpperCase()}`);
            questions[playerObj.i].status++;
            playerObj.i++;
            if(playerObj === firstPlayer){
                playerObj = secondPlayer;
            } else {
                playerObj = firstPlayer;
            }
            break;
            }
            showQuestions();
            break;

        case firstPlayer.i >= questions.length && secondPlayer.i >= questions.length:
            showPassedQuestions()
            checkIndexPassedQuestions()

            //let userAnswer = answerBox.value.toLowerCase()

            switch(userAnswer) {
                
                // End game
                case 'end':
                    playerObj.end += 1;
                    ranking(firstPlayer, secondPlayer)
                    break;
                    
                // Correct answer
                case playerObj.qPassed[playerObj.iQPassed].answer[playerObj.qPassed[playerObj.iQPassed].status]:
                    playerObj.points += 1;
                    playerObj.qPassed[playerObj.iQPassed].status++
                    playerObj.iQPassed++;
                    alert(`Correcto!!! Tienes ${playerObj.points} puntos.`);
                    break;
                
                // Wrong answer
                default:
                    playerObj.fails += 1;
                    alert(`Incorrecto! La respuesta correcta es: ${playerObj.qPassed[playerObj.iQPassed].answer[playerObj.qPassed[playerObj.iQPassed].status].toUpperCase()}`);
                    playerObj.qPassed[playerObj.iQPassed].status++
                    playerObj.iQPassed++;
                    if(playerObj === firstPlayer){
                        playerObj = secondPlayer;
                    } else {
                        playerObj = firstPlayer;
                    }
                    break;
            }
            break;
    }
}

// Check player's answer and act accordingly. After the answer, check the index in order to test the end of main questions block. Last step is to call showQuestions() again to continue the loop on the questions
function check() {

    console.log('inside check');

    let userAnswer = answerBox.value.toLowerCase()

    // Test indices to decide if we keep on main block of questions or if should change to questions passed
    switch(true) {
        // Still inside main questions block
        default:
            // Test answers
            switch(userAnswer) {

                /* Finish game - If answer is 'end': 
                    .break and end game
                */
                case 'end':
                    playerObj.end += 1;
                    ranking(firstPlayer, secondPlayer)
                    break;

                /* Pass question - If answer is 'pasapalabra':
                    .alert passed the question
                    .add 1 to 'status' in order to loop the different questions on each letter
                    .add question to player property 'qPasadas' (questions passed)
                    .add 1 to current player index count 
                    .reasign the 'player' variable to the other player to change turn
                */
                case 'pasapalabra':
                    alert('Pasaste esta.')
                    questions[playerObj.i].status++ 
                    playerObj.qPassed.push(questions[playerObj.i]);
                    playerObj.i++;
                    if(playerObj === firstPlayer){
                        playerObj = secondPlayer;
                    } else {
                        playerObj = firstPlayer;
                    };
                    break;

                /* Correct answer: 
                    .add 1 point to player 'points' property
                    .add 1 to 'status' in order to loop the different questions on each letter
                    .add 1 to current player index count
                    .alert correct answer
                */
                case questions[playerObj.i].answer[questions[playerObj.i].status]:
                    playerObj.points += 1;
                    questions[playerObj.i].status++
                    playerObj.i++;
                    alert(`Correcto!!! Tienes ${playerObj.points} puntos.`);
                    break;

                /* Wrong answer: 
                    .add 1 point to the 'fails' property of the player
                    .alert incorrect answer with the correct one in UPPER CASE
                    .add 1 to 'status' in order to loop the different questions on each letter
                    .add 1 to current player index count
                    .reasign the 'player' variable to the other player to change turn
                */
                default:
                    playerObj.fails += 1;
                    alert(`Incorrecto! La respuesta correcta es: ${questions[playerObj.i].answer[questions[playerObj.i].status].toUpperCase()}`);
                    questions[playerObj.i].status++;
                    playerObj.i++;
                    if(playerObj === firstPlayer){
                        playerObj = secondPlayer;
                    } else {
                        playerObj = firstPlayer;
                    }
                    break;
            }
        showQuestions();
        break;
        
        // After main block is finished we enter questions passed (if there are any)
        case firstPlayer.i >= questions.length && secondPlayer.i >= questions.length:
            
            switch(userAnswer) {
                
                // End game
                case 'end':
                    playerObj.end += 1;
                    ranking(firstPlayer, secondPlayer)
                    break;
                    
                // Correct answer
                case playerObj.qPassed[playerObj.iQPassed].answer[playerObj.qPassed[playerObj.iQPassed].status]:
                    playerObj.points += 1;
                    playerObj.qPassed[playerObj.iQPassed].status++
                    playerObj.iQPassed++;
                    alert(`Correcto!!! Tienes ${playerObj.points} puntos.`);
                    break;
                
                // Wrong answer
                default:
                    playerObj.fails += 1;
                    alert(`Incorrecto! La respuesta correcta es: ${playerObj.qPassed[playerObj.iQPassed].answer[playerObj.qPassed[playerObj.iQPassed].status].toUpperCase()}`);
                    playerObj.qPassed[playerObj.iQPassed].status++
                    playerObj.iQPassed++;
                    if(playerObj === firstPlayer){
                        playerObj = secondPlayer;
                    } else {
                        playerObj = firstPlayer;
                    }
                    break;
            }
        showQuestions();
        break;
    }
}

/*

*/