// In order to reduce and simplify the size of questions array I considered questions from letter A to G and within each letter I created 2 extra mock up questions to help visualize the player's answers and correct results.
const questions = [

    { letter: "a", answer: ["abducir", "a2", "a3"], status: 0, question: ["CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien", "CON LA A. A2", "CON LA A. A3"]},

    { letter: "b", answer: ["bingo", "b2", "b3"], status: 0, question: ["CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso", "CON LA B. B2", "CON LA B. B3"]},

    { letter: "c", answer: ["churumbel", "c2", "c3"], status: 0, question: ["CON LA C. Niño, crío, bebé", "CON LA C. C2", "CON LA C. C3"]},

    { letter: "d", answer: ["diarrea", "d2", "d3"], status: 0, question: ["CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida", "CON LA D: D2", "CON LA D: D3"]},

    { letter: "e", answer: ["ectoplasma", "e2", "e3"], status: 0, question: ["CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación", "CON LA E. E2", "CON LA E. E3"]},

    { letter: "f", answer: ["facil", "fa2", "f3"], status: 0, question: ["CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad", "CON LA F. F2", "CON LA F. F3"]},
    
    { letter: "g", answer: ["galaxia", "g2", "g3"], status: 0, question: ["CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas", "CON LA G. G2", "CON LA G. G3"]},
    /*
    { letter: "h", answer: "harakiri", status: 0, question: "CON LA H. Suicidio ritual japonés por desentrañamiento"},

    { letter: "i", answer: "iglesia", status: 0, question: "CON LA I. Templo cristiano"},

    { letter: "j", answer: "jabali", status: 0, question: "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba"},

    { letter: "k", answer: "kamikaze", status: 0, question: "CON LA K. Persona que se juega la vida realizando una acción temeraria"},

    { letter: "l", answer: "licantropo", status: 0, question: "CON LA L. Hombre lobo"},

    { letter: "m", answer: "misantropo", status: 0, question: "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas"},

    { letter: "n", answer: "necedad", status: 0, question: "CON LA N. Demostración de poca inteligencia"},

    { letter: "ñ", answer: "señal", status: 0, question: "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo."},

    { letter: "o", answer: "orco", status: 0, question: "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien"},

    { letter: "p", answer: "protoss", status: 0, question: "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft"},

    { letter: "q", answer: "queso", status: 0, question: "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche"},

    { letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor"},

    { letter: "s", answer: "stackoverflow", status: 0, question: "CON LA S. Comunidad salvadora de todo desarrollador informático"},

    { letter: "t", answer: "terminator", status: 0, question: "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984"},

    { letter: "u", answer: "unamuno", status: 0, question: "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914"},

    { letter: "v", answer: "vikingos", status: 0, question: "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa"},

    { letter: "w", answer: "sandwich", status: 0, question: "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso"},

    { letter: "x", answer: "botox", status: 0, question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética"},

    { letter: "y", answer: "peyote", status: 0, question: "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos"},

    { letter: "z", answer: "zen", status: 0, question: "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional"}*/]

// Present game and inform rules
function presentation() {
    alert('Bienvenido al juego PASAPALABRAS!!\n\nRepasaremos las reglas a seguir...');
    alert('El juego está pensado para 2 jugadores.\n\nEl primero en empezar será sorteado entre los dos.\n\nSe hará una série de preguntas y el jugador debe contestar una palabra que corresponda con la frase y que contenga la letra indicada (no hace falta que sea al inicio de la palabra).\n\nEl jugador puede usar "pasapalabra" para saltar la pregunta si no sabe contestarla al momento, en este caso el turno pasa al otro jugador. La letra pasada irá al final de la cola y será preguntada otra vez, oportunidad en la cual ya no se podrá usar "pasapalabra".\n\nCada respuesta correcta suma 1 punto a "points" y cada incorrecta suma 1 punto a "fails".\n\nSi el jugador contesta incorrectamente el turno pasa al otro jugador.\n\nSi el jugador desea finalizar el juego puede usar la palabra "end", pero sus puntos no figurarán en el ranking y el otro participante será el ganador.\n\nVAMOS JUGAR!!');
}

// Create players array containing 2 objects, one for each player. Each object contains the players's name, points, fails, index for questions passed, passed questions and 'end' count (if the player dialed 'end')
function createPlayers() {
    let player1 = '';
    let player2 = '';

    // While the name is empty string the function will keep asking for the players' names. It also won't allow player 2 to have the same name as player 1.
    player1 = prompt('Nombre jugador 1:')
    while(player1 === '') {
        alert('Please enter a name for your player.')
        player1 = prompt('Nombre jugador 1:')
    }

    player2 = prompt('Nombre jugador 2:')
    while(player2 === '' || player2 === player1) {
        alert(`Please enter a name for your player. It cannot be "${player1}"`)
        player2 = prompt('Nombre jugador 2:')
    }
    return [
        {playerName: player1, i: 0, points: 0, fails: 0, iQPassed: 0, qPassed: [], end: 0},
        {playerName: player2, i: 0, points: 0, fails: 0, iQPassed: 0, qPassed: [], end: 0}
    ];
}

// Create variable to receive randomly choosen index that will be used to select the first player to start the game
let iRandomSelPlayer = ''
// Create function to generate the random number that will be used as an index for the players array
function randomSelectPlayer(obj) {
    iRandomSelPlayer = Math.floor(Math.random() * obj.length)
    return iRandomSelPlayer
}

// Create variables to hold values for 1st and 2nd players
let firstPlayer = '';
let secondPlayer = '';
// Function to draw 1st and 2nd players
function drawPlayers(arr) {
    
    firstPlayer = arr[randomSelectPlayer(arr)]; // Set player1 to hold 1st player object

    arr.splice(iRandomSelPlayer, 1); // Remove selected player from original players array
    
    secondPlayer = arr[0]; // Select the remainder player from original players array to be the second player

    alert(`Empezamos con el jugador ${firstPlayer.playerName}`);
}

// Main function of the game
function pasapalabras(questions) {
    
    // Start with first player drawed
    let playerObj = firstPlayer;

    console.log(`first Player name = ${firstPlayer.playerName}`)
    console.log(`second Player name = ${secondPlayer.playerName}`)

    // Loop 'questions'. The i (index) will be taken from each player's index. We'll keep looping questions until both players have answered all questions.
    while(firstPlayer.i < questions.length || secondPlayer.i < questions.length) {

        // Change players if a player has answered all questions 
        if(playerObj.i >= questions.length) {
            if(playerObj === firstPlayer){
                playerObj = secondPlayer;
            } else {
                playerObj = firstPlayer;
            }
        }
        
        // Present 1st question of the letter in turn and receive player answer
        userAnswer = prompt(`Jugador ${playerObj.playerName}:\n\n ${questions[playerObj.i].question[questions[playerObj.i].status]}.\n\nRespuesta: `)

        console.log(`player ${playerObj.playerName}, index: ${playerObj.i}, answer: ${userAnswer}`)


        /* Finish game - If answer is 'end': 
            .break and end game
        */
        if(userAnswer.toLowerCase() === 'end') {
            playerObj.end += 1;
            break;

        /* Pass word - If answer is 'pasapalabra':
            .alert passed the question
            .add 1 to 'status' in order to loop the different questions on each letter
            .add question to player property 'qPasadas' (questions passed)
            .add 1 to current player index count 
            .reasign the 'player' variable to the other player to change turn
        */
        } else if(userAnswer.toLowerCase() === 'pasapalabra') {
            alert('Pasaste esta.')
            questions[playerObj.i].status++ 
            playerObj.qPassed.push(questions[playerObj.i]);
            playerObj.i++;
            if(playerObj === firstPlayer){
                playerObj = secondPlayer;
            } else {
                playerObj = firstPlayer;
            };

        /* Correct answer: 
            .add 1 point to player 'points' property
            .add 1 to 'status' in order to loop the different questions on each letter
            .add 1 to current player index count
            .alert correct answer
        */
        } else if(userAnswer.toLowerCase() === questions[playerObj.i].answer[questions[playerObj.i].status]) {
            playerObj.points += 1;
            questions[playerObj.i].status++
            playerObj.i++;
            alert(`Correcto!!! Tienes ${playerObj.points} puntos.`);

        /* Wrong answer: 
            .add 1 point to the 'fails' property of the player
            .alert incorrect answer with the correct one in UPPER CASE
            .add 1 to 'status' in order to loop the different questions on each letter
            .add 1 to current player index count
            .reasign the 'player' variable to the other player to change turn
        */
        } else {
            playerObj.fails += 1;
            alert(`Incorrecto! La respuesta correcta es: ${questions[playerObj.i].answer[questions[playerObj.i].status].toUpperCase()}`);
            questions[playerObj.i].status++;
            playerObj.i++;
            if(playerObj === firstPlayer){
                playerObj = secondPlayer;
            } else {
                playerObj = firstPlayer;
            }
        }
    }

    // This part handles the passed questions with the same logic as above. If there are any passed questions we enter this loop. 
    //On this loop we go a level further oto access the questions and answers since we have to access: player object > questions passed > current letter > question in turn.
    if((firstPlayer.qPassed.length > 0) || (secondPlayer.qPassed.length > 0)) {

        alert(`Players, abajo tenéis la cantidad de preguntas pasadas. Ya no es permitido usar "pasapalabra".\n\n${firstPlayer.playerName}, tienes ${firstPlayer.qPassed.length} pregunta pasada(s).\n\n${secondPlayer.playerName}, tienes ${secondPlayer.qPassed.length} pregunta pasada(s)`);
        
        console.log('Inside Passed Questions');
        
        // The loop will continue until all questions in questions passed are asked. We'll compare the 'iQpassed' with the 'qPassed' length for that. 
        while(firstPlayer.iQPassed < firstPlayer.qPassed.length || secondPlayer.iQPassed < secondPlayer.qPassed.length) {
            
            // If the current player has passed questions we enter the loop. Otherwise, we pass the turn to the other player.
            if(playerObj.iQPassed < playerObj.qPassed.length) {

                // Since we have more than one questions on each letter, we are using 'status' property to control the question to be asked on each turn. If the status index is superior than the amount of questions available to be asked, we restart the status index.
                if(playerObj.qPassed[playerObj.iQPassed].status >= playerObj.qPassed[playerObj.iQPassed].question.length) {
                    playerObj.qPassed[playerObj.iQPassed].status = 0;
                }

                // Show player name and questions in turn. The logic to show question in turn is this: player > questions passed > letter in turn > question in turn.
                userAnswer = prompt(`Jugador ${playerObj.playerName}:\n\n${playerObj.qPassed[playerObj.iQPassed].question[playerObj.qPassed[playerObj.iQPassed].status]}.\n\n Respuesta: `)

                console.log(`player ${playerObj.playerName}, indexQPasadas: ${playerObj.iQPassed}, answer: ${userAnswer}`)

                // End game
                if(userAnswer.toLowerCase() === 'end') {
                    playerObj.end += 1;
                    break;
                    
                // Correct answer
                } else if(userAnswer.toLowerCase() === playerObj.qPassed[playerObj.iQPassed].answer[playerObj.qPassed[playerObj.iQPassed].status]) {
                    playerObj.points += 1;
                    playerObj.qPassed[playerObj.iQPassed].status++
                    playerObj.iQPassed++;
                    alert(`Correcto!!! Tienes ${playerObj.points} puntos.`);
                
                // Wrong answer
                } else {
                    playerObj.fails += 1;
                    alert(`Incorrecto! La respuesta correcta es: ${playerObj.qPassed[playerObj.iQPassed].answer[playerObj.qPassed[playerObj.iQPassed].status].toUpperCase()}`);
                    playerObj.qPassed[playerObj.iQPassed].status++
                    playerObj.iQPassed++;
                    if(playerObj === firstPlayer){
                        playerObj = secondPlayer;
                    } else {
                        playerObj = firstPlayer;
                    }
                }
            
            // If the player in turn has already gone through all the questions in questions passed, the function changes the turn to the other player
            } else {

                if(playerObj === firstPlayer){
                    playerObj = secondPlayer;
                } else {
                    playerObj = firstPlayer;
                }
            }
        }
    }
}

// This function will show the ranking
function ranking(player1, player2) {
    // If any of the players have the 'end' count bigger than 0, it'll show a message saying this player is disqualified and that the other one is the winner
    if(player1.end > 0) {
        alert(`--RANKING--\n\n${player1.playerName}, you scored ${player1.points} points, but since you ended the game, you won't enter in the ranking.\n\nThe winner is ${player2.playerName} with ${player2.points} points!!`)

    } else if(player2.end > 0) {
        alert(`--RANKING--\n\n${player2.playerName}, you scored ${player2.points} points, but since you ended the game, you won't enter in the ranking.\n\nThe winner is ${player1.playerName} with ${player1.points} points!!`)

    // This will handle the classification is none of the players have ended the game
    } else {
        if(player1.points > player2.points) {
            alert(`--RANKING--\n\nCongratulations ${player1.playerName}!!\n\nYou are the winner with ${player1.points} points over ${player2.playerName}, with ${player2.points} points.`)

        } else if(player2.points > player1.points) {
            alert(`--RANKING--\n\nCongratulations ${player2.playerName}!!\n\nYou are the winner with ${player2.points} points over ${player1.playerName}, with ${player1.points} points.`)

        // This will handle the message if we have a draw
        } else {
            alert(`--RANKING--\n\nIt's a draw, both with ${player1.points} points. Bufff, you are terrible...`)
        }
    }
}


presentation();

let players = createPlayers()

drawPlayers(players)

pasapalabras(questions);

ranking(firstPlayer, secondPlayer);


