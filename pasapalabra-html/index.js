// Game Screen and Game Over variables
let gameScreen = document.getElementById('game_interface');
let endGameScreen = document.getElementById('end_game');

// Player 1 variables
let player1 = document.getElementById('player1_name');
let player1Points = document.getElementById('player1_points');
let player1Fails = document.getElementById('player1_fails');
let player1Passed = document.getElementById('player1_passed');

// Timer variable
let counterBox = document.getElementById('counter');

// Questions variables
let startButton = document.getElementById('start_button');
let questionBox = document.getElementById('question');
let letterBox = document.getElementById('letter');
let answerBox = document.getElementById('answer');
let playerBox = document.getElementById('questions_player');

// Letters bubbles variable
let letterBubbles = document.getElementsByClassName('letters');

const questions = [

    { letter: "a", answer: ["abducir", "avión", "manzana"], status: Math.floor(Math.random()*3), question: ["CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien", "CON LA A. 'Bus' que vuela", "CON LA A. Fruta redonda de color rojo"]},

    { letter: "b", answer: ["bingo", "basquiat", "bali"], status: Math.floor(Math.random()*3), question: ["CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso", "CON LA B. Artista americano negro neo-expresionista", "CON LA B. Isla en Indonesia, conocida por el surf"]},

    { letter: "c", answer: ["churumbel", "cry", "cristo"], status: Math.floor(Math.random()*3), question: ["CON LA C. Niño, crío, bebé", "CON LA C. Llorar en inglés", "CON LA C. Uno de los componentes de la divina trinidad"]},
    
    { letter: "d", answer: ["diarrea", "diluir", "delta"], status: Math.floor(Math.random()*3), question: ["CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida", "CON LA D: Tornar menos concentrado", "CON LA D: Final del curso de un rio"]},
    
    { letter: "e", answer: ["ectoplasma", "tierra", "exoesqueleto"], status: Math.floor(Math.random()*3), question: ["CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación", "CON LA E. Planeta en lo que vivimos", "CON LA E. Como una piel, pero más dura y resistente y menos flexible"]},

    { letter: "f", answer: ["facil", "fuego", "difteria"], status: Math.floor(Math.random()*3), question: ["CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad", "CON LA F. El primer grande descubrimiento humano", "CON LA F. Enfermedad ocasionada por la bacteria Corynebacterium diphtheriae"]},
    
    { letter: "g", answer: ["galaxia", "ganas", "g3"], status: Math.floor(Math.random()*3), question: ["CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas", "CON LA G. Lo que hace mover todo sin tocar en nada", "CON LA G. Mítico evento musical (gira) de 3 guitarristas, creado por Joe Satriani"]},

    { letter: "h", answer: ["harakiri", "hipódromo", "hindu"], status: Math.floor(Math.random()*3), question: ["CON LA H. Suicidio ritual japonés por desentrañamiento", "CON LA H. Donde hacen carrera los caballos", "CON LA H. Adepto del Hinduísmo"]},

    { letter: "i", answer: ["iglesia", "isla", "industria"], status: Math.floor(Math.random()*3), question: ["CON LA I. Templo cristiano", "CON LA I. Tierrra cercada de agua por todos los lados.", "CON LA I. Sector de la economia esencial para el desarollo de un país"]},

    { letter: "j", answer: ["jabali", "júpiter", "julia"], status: Math.floor(Math.random()*3), question: ["CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba", "CON LA J. Planeta más grande del sistema solar", "CON LA J. Feminino de Julio"]},

    { letter: "k", answer: ["kamikaze", "kizomba", "kafka"], status: Math.floor(Math.random()*3), question: ["CON LA K. Persona que se juega la vida realizando una acción temeraria", "CON LA K. Baile/Ritmo creado en Angola", "CON LA K. Apellido de uno de los grandes escritores del siglo 20"]},

    { letter: "l", answer: ["licantropo", "lengua", "ludismo"], status: Math.floor(Math.random()*3), question: ["CON LA L. Hombre lobo", "CON LA L. Se usa para besar, comer, beber...", "CON LA L. Movimiento de trabajadores ingleses en inicios del siglo 19 en contra de las máquinas"]},

    { letter: "m", answer: ["misantropo", "mobilia", "muerte"], status: Math.floor(Math.random()*3), question: ["CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas", "CON LA M. Conjunto de bienes que suele haber en un piso", "CON LA M. El final de la vida"]},

    { letter: "n", answer: ["necedad", "noia", "nervio"], status: Math.floor(Math.random()*3), question: ["CON LA N. Demostración de poca inteligencia", "CON LA N. Chica en catalán", "CON LA N. Parte del cuerpo que nos permite sentir"]},

    { letter: "ñ", answer: ["señal", "niñez", "puñal"], status: Math.floor(Math.random()*3), question: ["CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.", "CONTIENE LA Ñ. Una de las primeras etapas de la vida", "CONTIENE LA Ñ. Tipo de cutillo con punta muy delgada"]},

    { letter: "o", answer: ["orco", "órbita", "osmosis"], status: Math.floor(Math.random()*3), question: ["CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien", "CON LA O. Camino de un cuerpo celeste con grande masa", "CON LA O. Fenómeno físico relacionado con el movimiento de un disolvente a través de una membrana semipermeable"]},

    { letter: "p", answer: ["protoss", "patata", "psicodelia"], status: Math.floor(Math.random()*3), question: ["CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft", "CON LA P. Alimento tubérculo con alto valor calórico", "CON LA P. Estado alterado de la mente, usualmente inducido por una droga"]},

    { letter: "q", answer: ["queso", "quién", "quico"], status: Math.floor(Math.random()*3), question: ["CON LA Q. Producto obtenido por la maduración de la cuajada de la leche", "CON LA Q. Mítico grupo de rock cuyo nombre es un pronombre interrogativo", "CON LA Q. Personaje de la serie El Chavo del Ocho"]},

    { letter: "r", answer: ["raton", "rico", "rueda"], status: Math.floor(Math.random()*3), question: ["CON LA R. Roedor", "CON LA R. Con mucho dinero", "CON LA R. Una de las primeras invenciones humanas"]},

    { letter: "s", answer: ["stackoverflow", "sexo", "sucubus"], status: Math.floor(Math.random()*3), question: ["CON LA S. Comunidad salvadora de todo desarrollador informático", "CON LA S. Interación íntima entre 2 o más personas", "CON LA S. Demonio con forma feminina"]},

    { letter: "t", answer: ["terminator", "tatuaje", "tesoro"], status: Math.floor(Math.random()*3), question: ["CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984", "CON LA T. Marca muy usada por marineros en la piel, para marcar sus historias", "CON LA T. Se dice de algo muy valioso"]},

    { letter: "u", answer: ["unamuno", "eeuu", "úlcera"], status: Math.floor(Math.random()*3), question: ["CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914", "CON LA U. País mas poderoso del mundo", "CON LA U. Herida en la mucosa de algún órgano interno"]},

    { letter: "v", answer: ["vikingos", "virgen", "victoria"], status: Math.floor(Math.random()*3), question: ["CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa", "CON LA V. Que nunca hizo sexo", "CON LA V. Una gran conquista"]},

    { letter: "w", answer: ["sandwich", "wilson", "wallapop"], status: Math.floor(Math.random()*3), question: ["CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso", "CONTIENE LA W. Personaje inerte de una peli con el actor Tom Hanks", "CONTIENE LA W. Aplicación de venta de bienes de segunda mano"]},

    { letter: "x", answer: ["botox", "malcolm x", "clímax"], status: Math.floor(Math.random()*3), question: ["CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética", "CONTIENE LA X. Militante americano asesinado por defender los derechos de los negros ", "CONTIENE LA X. Punto alto de una película, un texto, una historia y afines"]},

    { letter: "y", answer: ["peyote", "yate", "yerba"], status: Math.floor(Math.random()*3), question: ["CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos", "CONTIENE LA Y. Barco grande y lujoso", "CONTIENE LA Y. Similar a planta"]},

    { letter: "z", answer: ["zen", "zarzuela", "zanahoria"], status: Math.floor(Math.random()*3), question: ["CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional", "CON LA Z. Forma de música teatral o género musical escénico surgido en España", "CON LA Z. Vegetal naranja muy saludable"]}
]

function createPlayer() {
    let playerName = '';

    while(playerName === '' || playerName === null) {
        playerName = prompt('Nombre jugador:')
    }

    return {playerName: playerName, i: 0, points: 0, fails: 0, iQPassed: 0, qPassed: [], end: 0};
}

function countdownTimer() {
    return counterBox.innerText--;
}

let ranking = [
    {playerName: 'Dani', i: 0, points: 12, fails: 15, iQPassed: 0, qPassed: [], end: 0},
    {playerName: 'Alejandra', i: 0, points: 22, fails: 5, iQPassed: 0, qPassed: [], end: 0},
    {playerName: 'Joana', i: 0, points: 25, fails: 2, iQPassed: 0, qPassed: [], end: 0},
    {playerName: 'Mara', i: 0, points: 10, fails: 10, iQPassed: 0, qPassed: [], end: 1},
    {playerName: 'Lomi', i: 0, points: 15, fails: 10, iQPassed: 0, qPassed: [], end: 0}
];

function showRankingSorted(ranking, playerObject) {
    
    let playerObj = playerObject;
    
    ranking.push(playerObj);

    function compare(playerA, playerB) {
        if (playerA.points > playerB.points){
            return -1;
        }
        if (playerA.points < playerB.points){
            return 1;
        }
            return 0;
    }
    
    ranking.sort(compare);

    let rankingString = '~~RANKING~~\n\n';
    let count = 1;

    for(let i = 0; i < ranking.length; i++) {
        if(ranking[i].end === 0) {
            rankingString += `#${count} - ${ranking[i].playerName}: ${ranking[i].points} points\n`;
            count++;
        }
    }
    alert(rankingString);
}

// This function will show questions on the HTML and also call the end of the game when the conditions are met. 
function showQuestions() {

    // Show data for each player after each round
    player1.innerText = playerObj.playerName;
    player1Points.innerText = playerObj.points;
    player1Fails.innerText = playerObj.fails;
    player1Passed.innerText = playerObj.qPassed.length;

    switch(true) {
    
        // All main questions finished and all question passed finished. Call ranking() and finish game.
        case (playerObj.i >= questions.length  && playerObj.qPassed.length === 0):
            showRankingSorted(ranking, playerObj);
            endGame();
            break;

        // All main questions finished and no questions passed. Call ranking() and finish game.
        case playerObj.i >= questions.length && playerObj.qPassed.length === 0:
            showRankingSorted(ranking, playerObj);
            endGame();
            break;

        // All main questions finished, enter questions passed.
        case (playerObj.i >= questions.length && playerObj.qPassed.length > 0):

            // Alert players they're inside questions passed block (only on first pass).
            if(countPassedQuestions === 0) {
                alert(`${playerObj.playerName}, tienes ${playerObj.qPassed.length} pregunta pasada(s).`);
                countPassedQuestions++;
            }

            if(playerObj.iQPassed > playerObj.qPassed.length-1){
                playerObj.iQPassed = 0;
            }

            console.log(`JUGADOR: ${playerObj.playerName}, LETRA: ${playerObj.qPassed[playerObj.iQPassed].letter}, PREGUNTA: ${playerObj.qPassed[playerObj.iQPassed].question[playerObj.qPassed[playerObj.iQPassed].status]}\n`);

            // Show player, letter, question
            playerBox.innerText = `Jugador ${playerObj.playerName}`;
            letterBox.innerText = `Letra: \n${playerObj.qPassed[playerObj.iQPassed].letter.toUpperCase()}`
            questionBox.innerText = `${playerObj.qPassed[playerObj.iQPassed].question[playerObj.qPassed[playerObj.iQPassed].status]}.\n\nRespuesta: `;

            // Change letter border color accordingly to the letter in turn
            letterBubbles[questions.findIndex((elem) => elem.letter === playerObj.qPassed[playerObj.iQPassed].letter)].style.border = '10px solid rgb(180, 50, 55)';            

            // Reset answer box and maintain cursor inside it
            answerBox.value = '';
            answerBox.focus();
            break;

        // Main questions pending, keep showing questions.   
        default:

            console.log(`JUGADOR: ${playerObj.playerName}, LETRA: ${questions[playerObj.i].letter}, PREGUNTA: ${questions[playerObj.i].question[questions[playerObj.i].status]}\n`);

            playerBox.innerText = `Jugador ${playerObj.playerName}`;
            letterBox.innerText = `Letra: \n${questions[playerObj.i].letter.toUpperCase()}`
            questionBox.innerText = `${questions[playerObj.i].question[questions[playerObj.i].status]}.\n\nRespuesta: `;

            // Change letter border color accordingly to the letter in turn
            letterBubbles[questions.findIndex((element) => element.letter === questions[playerObj.i].letter)].style.border = '10px solid rgb(180, 50, 55)';

            answerBox.value = '';
            answerBox.focus();
            break;
    } 
}

// Check function will control if the player's answers are correct, mark points, change indexes, etc.
function checkAnswer() {

    let userAnswer = answerBox.value.toLowerCase()

    // At any point if the player answers 'end' we call ranking and end the game
    if(userAnswer === 'end') {
        playerObj.end += 1;
        showRankingSorted(ranking, playerObj);
        endGame();

    // Any other answer we continue with the normal flow
    } else {
        switch(true) {
            default:
                switch(userAnswer) {

                    /* Pass question - If answer is 'pasapalabra':
                        .alert passed the question
                        .add question to player property 'qPasadas' (questions passed)
                        .add 1 to current player index count 
                        .reasign the 'player' variable to the other player to change turn
                    */
                    case 'pasapalabra':
                        // Reset border style
                        letterBubbles[questions.findIndex((element) => element.letter === questions[playerObj.i].letter)].style.border = '0px'

                        alert('Pasaste esta.')
                        playerObj.qPassed.push(questions[playerObj.i]);
                        playerObj.i++;
                        break;

                    /* Correct answer: 
                        .add 1 point to player 'points' property
                        .add 1 to current player index count
                        .alert correct answer
                    */
                    case questions[playerObj.i].answer[questions[playerObj.i].status]:
                        // Reset border style and change background to green
                        letterBubbles[questions.findIndex((element) => element.letter === questions[playerObj.i].letter)].style.border = '0px'                        
                        letterBubbles[questions.findIndex((element) => element.letter === questions[playerObj.i].letter)].style.backgroundColor = 'rgb(144, 214, 78)'

                        playerObj.points += 1;
                        playerObj.i++;
                        alert(`Correcto!!! Tienes ${playerObj.points} puntos.`);
                        break;

                    /* Wrong answer: 
                        .add 1 point to the 'fails' property of the player
                        .alert incorrect answer with the correct one in UPPER CASE
                        .add 1 to current player index count
                        .reasign the 'player' variable to the other player to change turn
                    */
                    default:
                        // Reset border style and change background to red
                        letterBubbles[questions.findIndex((element) => element.letter === questions[playerObj.i].letter)].style.border = '0px'
                        letterBubbles[questions.findIndex((element) => element.letter === questions[playerObj.i].letter)].style.backgroundColor = 'red'

                        playerObj.fails += 1;
                        alert(`Incorrecto! La respuesta correcta es: ${questions[playerObj.i].answer[questions[playerObj.i].status].toUpperCase()}`);
                        playerObj.i++;
                        break;
                }
                showQuestions();
                break;
            
            // After main block is finished we enter questions passed (if there are any)
            case playerObj.i >= questions.length:

                if(playerObj.iQPassed > playerObj.qPassed.length-1){
                    playerObj.iQPassed = 0;
                }

                switch(userAnswer) {
                    case 'pasapalabra':
                        // Reset border style
                        letterBubbles[questions.findIndex((elem) => elem.letter === playerObj.qPassed[playerObj.iQPassed].letter)].style.border = '0px'

                        alert('Pasaste esta.')
                        if(playerObj.iQPassed++ > playerObj.qPassed.length-1) {
                            playerObj.iQPassed = 0;
                        }
                        console.log(playerObj.qPassed)
                        break;
                        
                    // Correct answer
                    case playerObj.qPassed[playerObj.iQPassed].answer[playerObj.qPassed[playerObj.iQPassed].status]:
                        // Reset border style
                        letterBubbles[questions.findIndex((elem) => elem.letter === playerObj.qPassed[playerObj.iQPassed].letter)].style.border = '0px'
                        letterBubbles[questions.findIndex((elem) => elem.letter === playerObj.qPassed[playerObj.iQPassed].letter)].style.backgroundColor = 'rgb(144, 214, 78)';    

                        playerObj.points += 1;
                        playerObj.qPassed.splice(playerObj.iQPassed, 1)
                        alert(`Correcto!!! Tienes ${playerObj.points} puntos.`);
                        break;
                    
                    // Wrong answer
                    default:
                        // Reset border style
                        letterBubbles[questions.findIndex((elem) => elem.letter === playerObj.qPassed[playerObj.iQPassed].letter)].style.border = '0px'
                        letterBubbles[questions.findIndex((elem) => elem.letter === playerObj.qPassed[playerObj.iQPassed].letter)].style.backgroundColor = 'red';

                        playerObj.fails += 1;
                        alert(`Incorrecto! La respuesta correcta es: ${playerObj.qPassed[playerObj.iQPassed].answer[playerObj.qPassed[playerObj.iQPassed].status].toUpperCase()}`);
                        playerObj.qPassed.splice(playerObj.iQPassed, 1)
                        break;
                }
            showQuestions();
            break;
        }
    }   
}

// Change elements display and visibility properties in order to change from game screen to game is over.
function endGame() {
    // In order for 'game over' to be aligned towards the top of the page, we used display: none.
    gameScreen.style.display = 'none';
    endGameScreen.style.visibility = 'visible';
  }

// Go back to index.html
function reloadWindow() {
    window.location.href = "index.html";
  }

function main() {

    // Hide 'EMPEZAR' button
    startButton.style.visibility = 'hidden';

    // Timer in seconds
    let timer = 300
    counterBox.innerText = timer;

    answerBox.value = '';

    playerObj = createPlayer();

    // Show timer on screen.
    setInterval(countdownTimer, 1000);
    
    // Countdown timer to finish game.
    setTimeout(function () {
        showRankingSorted(ranking, playerObj);
        endGame();
    }, 1000*timer)

    // This counter is used to show, just the first pass, how many passed questions user has.
    countPassedQuestions = 0;

    // Properly start game
    showQuestions(playerObj);
}