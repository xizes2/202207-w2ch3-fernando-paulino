// Array with objects for each flight available
let flights = [

    { id: 00, to: 'Bilbao', from: 'Barcelona', cost: 1600, scale: false },

    { id: 01, to: 'New York', from: 'Barcelona', cost: 700, scale: false },

    { id: 02, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },

    { id: 03, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },

    { id: 04, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },

    { id: 05, to: 'London', from: 'Madrid', cost: 200, scale: false },

    { id: 06, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },

    { id: 07, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },

    { id: 08, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },

    { id: 09, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },

    { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false }
];

// Create array to receive all ids in 'flights'
let idsArray = [];

function welcome() {
  _name = prompt('Please, enter your name:');
  alert(`Welcome to Skylab Airlines, ${_name}!`)
  return _name;
};

// Change boolean value to 'yes' or 'no' to show more user friendly is flight has scale or not
function boolToWord(bool) {
  return bool ? "no" : "yes" ;
};

// Log flight in easily readable way
function printFlight(flight){
  console.log(`Flight id: ${flight.id}, From: ${flight.from}, To: ${flight.to}, Price: ${flight.cost}, Direct Flight: ${boolToWord(flight.scale)}`);
};

// Use forEach method to loop flights array and print each element
function logFlights() {
    console.log('These are the flights available for today:')
    flights.forEach(printFlight);
};

// Iniciate totalPrice to 0, loop on flights array to sum each flight price and log average price
function logAverageFlightsPrice() {
  let totalPrice = 0;
  for(let i = 0; i < flights.length; i++) {
    totalPrice += flights[i].cost;
  }
  console.log(`\nAverage Ticket Price: ${(totalPrice/flights.length).toFixed(2)}`)
  console.log('\n');
};

// Log all flights with scale and their total count
function logScaledFlights() {
  
    // First we count how many scaled flights are there
    let count = 0;
    for(let i = 0; i < flights.length; i++){
        if(flights[i].scale === true) {
        //printFlight(flights[i])
        count += 1;
        }
    }

    // Second we print the count and the flights
    console.log(`These are all the ${count} scaled flights for today: `);
    for(let i = 0; i < flights.length; i++){
        if(flights[i].scale === true) {
          printFlight(flights[i])
        }
    }
  console.log('\n');
};

// Slice the flights on the last 5 and print each flight
function logFiveLastFlights() {

    //Log only destinations
    function printDestination(flight){
        console.log(`Destination: ${flight.to}`);
      }

    console.log('These are the last 5 flights of the day:');
    flights.slice(-5).forEach(printDestination);
};

function askCredentials() {

    let credentials;

    while(credentials != 'admin' && credentials != 'user') {
        credentials = prompt('Please, enter your status, admin or user:').toLowerCase();
    }
    return credentials;
};

function showAdminOptions() {

    let promptOption;

    while(promptOption != '1' && promptOption != '2') {
        promptOption = prompt(`Welcome to the administration menu, ${_name}.\n\nWhat would you like to do next:\n\n1 - Create flight\n2 - Eliminate flight`);
    }
    return promptOption;
};

// Create function to add ids to array
function getIds(flight) {
    idsArray.push(flight.id);
};

// Function returns new flight with the same configuration as the other flights
function createFlight() {

    // Reset idsArray each time the loop restarts so we don't have repeated id's
    idsArray = [];
    // Add ids to array            
    flights.forEach(getIds);

    alert('Welcome to the menu Create Flights.\n\nPlease, complete the next questions correctly in order to add a new flight.')

    // Since the total number of flights allowed is 15, we'll only enter the block to create new flight if 'flights' lenght is less than 15
    if(flights.length < 15) {

        // The id will be generated randomly and will be unique
        let _id;
        while(idsArray.includes(_id) || _id === undefined) {
            _id = Math.floor(Math.random() * 10000);
        }        
        let _from;
        let _to;
        let _cost;
        let _scale;

        // User won't pass to the next question until current question is not answered
        while(_from === undefined || _from === '' || _from === null) {
            _from = prompt('Flight Origin:');
        }

        while(_to === undefined || _to === '' || _to === null) {
            _to = prompt('Flight destination:');
        }

        while(_cost === undefined || isNaN(_cost) || _cost === '' || _cost === null) {
            _cost = prompt('Flight cost:');
        }
        _cost = Number(_cost);

        while(_scale != 'true' && _scale != 'false') {
            _scale = prompt('Flight has scale true/false:');
        }
        // Transform _scale string value to boolean
        _scale = (_scale === 'true');

        flights.push({'id': _id, 'to': _to, 'from': _from, 'cost': _cost, 'scale': _scale});
        logFlights();

    } else {
        alert('You cannot add new flights.');
    }

    // Ask if user wants to repeat the operation
    let repeat;
    while(repeat != 'y' && repeat != 'n') {
      repeat = prompt('Would you like to repeat this operation y/n?')
    }
    if(repeat === 'y') {
      createFlight();
    }
};

// Select flight id to be eliminated from flights array
function eliminateFlight() {

    // Reset idsArray each time the loop restarts so we don't have repeated id's 
    idsArray = [];
    // Add ids to array            
    flights.forEach(getIds);
    
    // Iniciate variable to hold id selected
    let _id;

    // Keep asking for id until it's included in 'flights', it's not null nor empty string
    while(!idsArray.includes(_id) || _id === null || _id === '') {
        _id = prompt(`These are the confirmed flights ids at the moment:\n\n${idsArray}\n\nInsert the flight id to be eliminated:`);
        // Had to add an extra line here in order to separate the logic for null and '', since both of these return 0 when transformed to Number (and 0 is included in idsArray, so it would be a valid id)
        if(_id === null || _id === '') {
            continue;
        // Everything else will be converted to Number and if it's inside idsArray, will exit while loop
        } else {
            _id = Number(_id);
        }
    }

    // Loop 'flights' to find indexOf prompted id and remove selected id from 'flights'
    for(let i = 0; i < flights.length; i++) {
        if(_id === flights[i].id){
            //console.log(flights[i].id, flights.indexOf(flights[i]))
            flights.splice(i, 1);
        }
    }

    logFlights();

    // Ask if user wants to repeat the operation
    let repeat;
    while(repeat != 'y' && repeat != 'n') {
      repeat = prompt('Would you like to repeat this operation y/n?')
    }
    if(repeat === 'y') {
      eliminateFlight();
    }
};

function showUserOptions() {

    let promptOption;

    while(promptOption != '1' && promptOption != '2') {
        promptOption = prompt(`Welcome to the user's menu, ${_name}.\n\nWhat would you like to do next:\n\n1 - Search flight by price\n2 - Buy ticket`);
    }
    return promptOption;
};

// Search all flights that are equal or lower than price prompted by user
function searchFlightByPrice() {
    let price;

    // Keep prompting until we get a number value
    while(price === undefined || isNaN(price) || price === '' || price === null) {
        price = prompt("What's the maximum price you'd like to pay:");
    };

    // Function to print flights within price conditional. We are using the previous made function to print the flights, printFlight()
    function logFlightsByPrice(flight) {
        if(price >= flight.cost) {
            printFlight(flight);
        };
    }
    console.log(`These are the flights available for €${price} or cheaper:`);
    // Call the function and actually print the flights
    flights.forEach(logFlightsByPrice);
    //Print blank line
    console.log();
}

function main() {

    // Variant for the user's name
    let _name;

    // Variant for user's profile
    let credentials;

    // Variant to receive the admin's/user's option that will call the respective function
    let promptOption;

    // Variant to be used for continuous admin/user operations
    let promptContinue;     

    _name = welcome();
    logFlights();
    logAverageFlightsPrice();
    logScaledFlights();
    logFiveLastFlights();
  
    credentials = askCredentials();

    if(credentials === 'admin') {
        while(promptContinue != 'exit') {
            promptOption = showAdminOptions()
            if(promptOption ==='1') {                
                createFlight()
            } else if(promptOption === '2') {
                eliminateFlight()
            }
            promptContinue = prompt('Type "exit" to leave the program or enter to continue:')
        }
    } else if(credentials === 'user') {
        while(promptContinue != 'exit') {
            promptOption = showUserOptions()
            if(promptOption ==='1') {                
                searchFlightByPrice()
            } else if(promptOption === '2') {
                
            }
            promptContinue = prompt('Type "exit" to leave the program or enter to continue:')
        }
    }
};

////////////////////////////////////////////////////

// Array with objects for each flight available

let flightsList = [];

let scaledFlightsList = [];


// Global variant for the user's name
let name;

function welcome() {
  name = prompt('Please, enter your name:');
  alert(`Welcome to Skylab Airlines, ${name}!`)
}

// Change boolean value to 'yes' or 'no' to show more user friendly is flight has scale or not
function boolToWord(bool) {
  return bool ? "no" : "yes" ;
}

// Log flight in easily readable way
function makeFlightList(flight){
  flightsList.push([`Flight id: ${flight.id}, From: ${flight.from}, To: ${flight.to}, Price: ${flight.cost}, Direct Flight: ${boolToWord(flight.scale)}`]);
}

// Use forEach method to loop flights array and print each element
function logFlights() {
  alert('These are the flights available for today:')
  flights.forEach(makeFlightList);
}

// Iniciate totalPrice to 0, loop on flights array to sum each flight price and log average price
function logAverageFlightsPrice() {
  let totalPrice = 0;
  for(let i = 0; i < flights.length; i++) {
    totalPrice += flights[i].cost;
  }
  alert(`\nAverage Ticket Price: ${(totalPrice/flights.length).toFixed(2)} €`)
}

// Log all flights with scale and their total count
function logScaledFlights() {
  
    // First we count how many scaled flights are there
    let count = 0;
    for(let i = 0; i < flights.length; i++){
        if(flights[i].scale === true) {
        //printFlight(flights[i])
        count += 1;
        }
    }

    // Second we print the count and the flights
    console.log(`These are all the ${count} scaled flights for today: `);
    for(let i = 0; i < flights.length; i++){
        if(flights[i].scale === true) {
          scaledFlightsList.push(flights[i]) /////////////////////// INCLUIR VOOS COM ESCALA NUMA LISTA PARA DEPOIS ALERTAR
          //printFlight(flights[i])
        }
    }
  //console.log('\n');
}

// Slice the flights on the last 5 and print each flight
function logFiveLastFlights() {

    function printDestination(flight){
        console.log(`Destination: ${flight.to}`);
      }

    console.log('These are the last 5 flights of the day:');
    flights.slice(-5).forEach(printDestination);
}

function main() {
  welcome();
  logFlights();
  alert(flightsList.join('\n'));
  logAverageFlightsPrice();
  logScaledFlights();
  alert(scaledFlightsList.join('\n'));
  logFiveLastFlights();
}

//main();

let a = [1, 2, 3]
console.log(a.join(' and ')) // Output: 1 and 2 and 3