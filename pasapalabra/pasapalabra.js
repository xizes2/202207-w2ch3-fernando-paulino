// In order to test the program faster I considered questions from letter A to G and within each letter I created 2 extra questions.
const questions = [

    { letter: "a", answer: ["abducir", "avión", "manzana"], currentLetterIndex: Math.floor(Math.random()*3), question: ["CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien", "CON LA A. 'Bus' que vuela", "CON LA A. Fruta redonda de color rojo"]},

    { letter: "b", answer: ["bingo", "basquiat", "bali"], currentLetterIndex: Math.floor(Math.random()*3), question: ["CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso", "CON LA B. Artista americano negro neo-expresionista", "CON LA B. Isla en Indonesia, conocida por el surf"]},

    { letter: "c", answer: ["churumbel", "cry", "cristo"], currentLetterIndex: Math.floor(Math.random()*3), question: ["CON LA C. Niño, crío, bebé", "CON LA C. Llorar en inglés", "CON LA C. Uno de los componentes de la divina trinidad"]},
    
    { letter: "d", answer: ["diarrea", "diluir", "delta"], currentLetterIndex: Math.floor(Math.random()*3), question: ["CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida", "CON LA D: Tornar menos concentrado", "CON LA D: Final del curso de un rio"]},
    
    { letter: "e", answer: ["ectoplasma", "tierra", "exoesqueleto"], currentLetterIndex: Math.floor(Math.random()*3), question: ["CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación", "CON LA E. Planeta en lo que vivimos", "CON LA E. Como una piel, pero más dura y resistente y menos flexible"]},

    { letter: "f", answer: ["facil", "fuego", "difteria"], currentLetterIndex: Math.floor(Math.random()*3), question: ["CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad", "CON LA F. El primer grande descubrimiento humano", "CON LA F. Enfermedad ocasionada por la bacteria Corynebacterium diphtheriae"]},
    
    { letter: "g", answer: ["galaxia", "ganas", "g3"], currentLetterIndex: Math.floor(Math.random()*3), question: ["CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas", "CON LA G. Lo que hace mover todo sin tocar en nada", "CON LA G. Mítico evento musical (gira) de 3 guitarristas, creado por Joe Satriani"]},

    { letter: "h", answer: ["harakiri", "hipódromo", "hindu"], currentLetterIndex: Math.floor(Math.random()*3), question: ["CON LA H. Suicidio ritual japonés por desentrañamiento", "CON LA H. Donde hacen carrera los caballos", "CON LA H. Adepto del Hinduísmo"]},

    { letter: "i", answer: ["iglesia", "isla", "industria"], currentLetterIndex: Math.floor(Math.random()*3), question: ["CON LA I. Templo cristiano", "CON LA I. Tierrra cercada de agua por todos los lados.", "CON LA I. Sector de la economia esencial para el desarollo de un país"]},

    { letter: "j", answer: ["jabali", "júpiter", "julia"], currentLetterIndex: Math.floor(Math.random()*3), question: ["CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba", "CON LA J. Planeta más grande del sistema solar", "CON LA J. Feminino de Julio"]},

    { letter: "k", answer: ["kamikaze", "kizomba", "kafka"], currentLetterIndex: Math.floor(Math.random()*3), question: ["CON LA K. Persona que se juega la vida realizando una acción temeraria", "CON LA K. Baile/Ritmo creado en Angola", "CON LA K. Apellido de uno de los grandes escritores del siglo 20"]},

    { letter: "l", answer: ["licantropo", "lengua", "ludismo"], currentLetterIndex: Math.floor(Math.random()*3), question: ["CON LA L. Hombre lobo", "CON LA L. Se usa para besar, comer, beber...", "CON LA L. Movimiento de trabajadores ingleses en inicios del siglo 19 en contra de las máquinas"]},

    { letter: "m", answer: ["misantropo", "mobilia", "muerte"], currentLetterIndex: Math.floor(Math.random()*3), question: ["CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas", "CON LA M. Conjunto de bienes que suele haber en un piso", "CON LA M. El final de la vida"]},

    { letter: "n", answer: ["necedad", "noia", "nervio"], currentLetterIndex: Math.floor(Math.random()*3), question: ["CON LA N. Demostración de poca inteligencia", "CON LA N. Chica en catalán", "CON LA N. Parte del cuerpo que nos permite sentir"]},

    { letter: "ñ", answer: ["señal", "niñez", "puñal"], currentLetterIndex: Math.floor(Math.random()*3), question: ["CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.", "CONTIENE LA Ñ. Una de las primeras etapas de la vida", "CONTIENE LA Ñ. Tipo de cutillo con punta muy delgada"]},

    { letter: "o", answer: ["orco", "órbita", "osmosis"], currentLetterIndex: Math.floor(Math.random()*3), question: ["CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien", "CON LA O. Camino de un cuerpo celeste con grande masa", "CON LA O. Fenómeno físico relacionado con el movimiento de un disolvente a través de una membrana semipermeable"]},

    { letter: "p", answer: ["protoss", "patata", "psicodelia"], currentLetterIndex: Math.floor(Math.random()*3), question: ["CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft", "CON LA P. Alimento tubérculo con alto valor calórico", "CON LA P. Estado alterado de la mente, usualmente inducido por una droga"]},

    { letter: "q", answer: ["queso", "quién", "quico"], currentLetterIndex: Math.floor(Math.random()*3), question: ["CON LA Q. Producto obtenido por la maduración de la cuajada de la leche", "CON LA Q. Mítico grupo de rock cuyo nombre es un pronombre interrogativo", "CON LA Q. Personaje de la serie El Chavo del Ocho"]},

    { letter: "r", answer: ["raton", "rico", "rueda"], currentLetterIndex: Math.floor(Math.random()*3), question: ["CON LA R. Roedor", "CON LA R. Con mucho dinero", "CON LA R. Una de las primeras invenciones humanas"]},

    { letter: "s", answer: ["stackoverflow", "sexo", "sucubus"], currentLetterIndex: Math.floor(Math.random()*3), question: ["CON LA S. Comunidad salvadora de todo desarrollador informático", "CON LA S. Interación íntima entre 2 o más personas", "CON LA S. Demonio con forma feminina"]},

    { letter: "t", answer: ["terminator", "tatuaje", "tesoro"], currentLetterIndex: Math.floor(Math.random()*3), question: ["CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984", "CON LA T. Marca muy usada por marineros en la piel, para marcar sus historias", "CON LA T. Se dice de algo muy valioso"]},

    { letter: "u", answer: ["unamuno", "eeuu", "úlcera"], currentLetterIndex: Math.floor(Math.random()*3), question: ["CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914", "CON LA U. País mas poderoso del mundo", "CON LA U. Herida en la mucosa de algún órgano interno"]},

    { letter: "v", answer: ["vikingos", "virgen", "victoria"], currentLetterIndex: Math.floor(Math.random()*3), question: ["CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa", "CON LA V. Que nunca hizo sexo", "CON LA V. Una gran conquista"]},

    { letter: "w", answer: ["sandwich", "wilson", "wallapop"], currentLetterIndex: Math.floor(Math.random()*3), question: ["CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso", "CONTIENE LA W. Personaje inerte de una peli con el actor Tom Hanks", "CONTIENE LA W. Aplicación de venta de bienes de segunda mano"]},

    { letter: "x", answer: ["botox", "malcolm x", "clímax"], currentLetterIndex: Math.floor(Math.random()*3), question: ["CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética", "CONTIENE LA X. Militante americano asesinado por defender los derechos de los negros ", "CONTIENE LA X. Punto alto de una película, un texto, una historia y afines"]},

    { letter: "y", answer: ["peyote", "yate", "yerba"], currentLetterIndex: Math.floor(Math.random()*3), question: ["CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos", "CONTIENE LA Y. Barco grande y lujoso", "CONTIENE LA Y. Similar a planta"]},

    { letter: "z", answer: ["zen", "zarzuela", "zanahoria"], currentLetterIndex: Math.floor(Math.random()*3), question: ["CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional", "CON LA Z. Forma de música teatral o género musical escénico surgido en España", "CON LA Z. Vegetal naranja muy saludable"]}
]

function presentation() {
    alert('Bienvenido al juego PASAPALABRAS!!\n\nRepasaremos las reglas a seguir...');
    alert('Se hará una série de preguntas y el jugador debe contestar una palabra que corresponda con la frase y que contenga la letra indicada (no hace falta que sea al inicio de la palabra).\n\nEl jugador puede usar "pasapalabra" para saltar la pregunta si no sabe contestarla al momento. La letra pasada irá al final de la cola y será preguntada otra vez.Cada respuesta correcta suma 1 punto a "points" y cada incorrecta suma 1 punto a "fails".\n\nSi el jugador desea finalizar el juego puede usar la palabra "end", pero sus puntos no figurarán en el ranking.\n\nVAMOS JUGAR!!');
}

function createPlayer() {
    let playerName = '';

    while(playerName === '' || playerName === null) {
        playerName = prompt('Nombre jugador 1:')
    }

    return {playerName: playerName, i: 0, points: 0, fails: 0, iQPassed: 0, qPassed: [], end: 0};
}

// Main function of the game
function pasapalabras(questions, playerObject) {
    
    let playerObj = playerObject;

    // Keep looping questions array until player have answered all questions.
    while(playerObj.i < questions.length) {

        userAnswer = prompt(`Jugador ${playerObj.playerName}:\n\n ${questions[playerObj.i].question[questions[playerObj.i].currentLetterIndex]}.\n\nRespuesta: `)

        console.log(`pregunta: ${questions[playerObj.i].question[questions[playerObj.i].currentLetterIndex]}, index: ${playerObj.i}, answer: ${userAnswer}`)


        // End game
        if(userAnswer.toLowerCase() === 'end') {
            playerObj.end += 1;
            break;

        // Pass word
        } else if(userAnswer.toLowerCase() === 'pasapalabra') {
            alert('Pasaste esta.');
            //questions[playerObj.i].currentLetterIndex++;
            playerObj.qPassed.push(questions[playerObj.i]);
            playerObj.i++;

        // Correct answer
        } else if(userAnswer.toLowerCase() === questions[playerObj.i].answer[questions[playerObj.i].currentLetterIndex]) {
            playerObj.points += 1;
            //questions[playerObj.i].currentLetterIndex++
            playerObj.i++;
            alert(`Correcto!!! Tienes ${playerObj.points} puntos.`);

        // Wrong answer
        } else {
            playerObj.fails += 1;
            alert(`Incorrecto! La respuesta correcta es: ${questions[playerObj.i].answer[questions[playerObj.i].currentLetterIndex].toUpperCase()}`);
            //questions[playerObj.i].currentLetterIndex++;
            playerObj.i++;
        }
    }
    // This part handles the passed questions with the same logic as above.
    if(playerObj.qPassed.length > 0) {
        alert(`${playerObj.playerName}, tienes ${playerObj.qPassed.length} pregunta(s) pasada(s).`);
        console.log(playerObj.qPassed)

    }
    
    while(playerObj.qPassed.length > 0) {

        if(playerObj.iQPassed > playerObj.qPassed.length-1){
            playerObj.iQPassed = 0;
        }

        userAnswer = prompt(`Jugador ${playerObj.playerName}:\n\n${playerObj.qPassed[playerObj.iQPassed].question[playerObj.qPassed[playerObj.iQPassed].currentLetterIndex]}.\n\n Respuesta: `)

        console.log(`pregunta: ${playerObj.qPassed[playerObj.iQPassed].question[playerObj.qPassed[playerObj.iQPassed].currentLetterIndex]}, index: ${playerObj.iQPassed}, answer: ${userAnswer}`)

        if(userAnswer.toLowerCase() === 'end') {
            playerObj.end += 1;
            break;
        
        } else if(userAnswer.toLowerCase() === 'pasapalabra') {
            alert('Pasaste esta.')
            if(playerObj.iQPassed++ > playerObj.qPassed.length-1) {
                playerObj.iQPassed = 0;
            }
            console.log(playerObj.qPassed)

        } else if(userAnswer.toLowerCase() === playerObj.qPassed[playerObj.iQPassed].answer[playerObj.qPassed[playerObj.iQPassed].currentLetterIndex]) {
            playerObj.points += 1;
            playerObj.qPassed.splice(playerObj.iQPassed, 1)
            console.log(playerObj.qPassed, playerObj.iQPassed)
            alert(`Correcto!!! Tienes ${playerObj.points} puntos.`);
        
        } else {
            playerObj.fails += 1;
            alert(`Incorrecto! La respuesta correcta es: ${playerObj.qPassed[playerObj.iQPassed].answer[playerObj.qPassed[playerObj.iQPassed].currentLetterIndex].toUpperCase()}`);
            playerObj.qPassed.splice(playerObj.iQPassed, 1)
            console.log(playerObj.qPassed)

        }
        
    }
}

// Invented ranking (considering questions until letter G)
let ranking = [
    {playerName: 'Dani', i: 0, points: 6, fails: 1, iQPassed: 0, qPassed: [], end: 0},
    {playerName: 'Alejandra', i: 0, points: 2, fails: 5, iQPassed: 0, qPassed: [], end: 0},
    {playerName: 'Joana', i: 0, points: 7, fails: 0, iQPassed: 0, qPassed: [], end: 0},
    {playerName: 'Mara', i: 0, points: 4, fails: 0, iQPassed: 0, qPassed: [], end: 1},
    {playerName: 'Lomi', i: 0, points: 3, fails: 4, iQPassed: 0, qPassed: [], end: 0}
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

function main() {
    presentation();

    let playerObj = createPlayer();

    pasapalabras(questions, playerObj);

    showRankingSorted(ranking, playerObj);
}

main();
