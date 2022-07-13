// Array with objects for each flight available
const flights = [
  {
    id: 0,
    whereTo: "Bilbao",
    whereFrom: "Barcelona",
    flightCost: 1600,
    hasScale: false,
  },

  { id: 1, to: "New York", from: "Barcelona", cost: 700, scale: false },

  { id: 2, to: "Los Angeles", from: "Madrid", cost: 1100, scale: true },

  { id: 3, to: "Paris", from: "Barcelona", cost: 210, scale: false },

  { id: 4, to: "Roma", from: "Barcelona", cost: 150, scale: false },

  { id: 5, to: "London", from: "Madrid", cost: 200, scale: false },

  { id: 6, to: "Madrid", from: "Barcelona", cost: 90, scale: false },

  { id: 7, to: "Tokyo", from: "Madrid", cost: 1500, scale: true },

  { id: 8, to: "Shangai", from: "Barcelona", cost: 800, scale: true },

  { id: 9, to: "Sydney", from: "Barcelona", cost: 150, scale: true },

  { id: 10, to: "Tel-Aviv", from: "Madrid", cost: 150, scale: false },
];

// Variant for the user's name
let userName;

// Create array to receive all ids in 'flights'
let idsArray = [];

// Welcome user and ask name
function welcome() {
  alert(`Welcome to Skylab Airlines!`);
  while (userName === undefined || userName === null)
    userName = prompt("Please, enter your name:");
  return userName;
}

// Change boolean value to 'yes' or 'no' to show more user friendly if flight has scale or not
function boolToWord(bool) {
  return bool ? "no" : "yes";
}

// Log flight in easily readable way
function printFlight(flight) {
  console.log(
    `Flight id: ${flight.id}, From: ${flight.from}, To: ${flight.to}, Price: ${
      flight.cost
    }, Direct Flight: ${boolToWord(flight.scale)}`
  );
}

// Use forEach method to loop flights array and print each element
function logFlights() {
  console.log("These are the flights available for today:");
  flights.forEach(printFlight);
  console.log();
}

// Iniciate totalPrice to 0, loop on flights array to sum each flight price and log average price
function logAverageFlightsPrice() {
  let totalPrice = 0;
  for (let i = 0; i < flights.length; i++) {
    totalPrice += flights[i].flightCost;
  }
  console.log(
    `Average Ticket Price: ${(totalPrice / flights.length).toFixed(2)}`
  );
  console.log();
}

// Log all flights with scale and their total count
function logScaledFlights() {
  // First we count how many scaled flights are there
  let count = 0;
  for (let i = 0; i < flights.length; i++) {
    if (flights[i].hasScale === true) {
      count += 1;
    }
  }

  // Second we print the count and the flights
  console.log(`These are all the ${count} scaled flights for today: `);
  for (let i = 0; i < flights.length; i++) {
    if (flights[i].hasScale === true) {
      printFlight(flights[i]);
    }
  }
  console.log();
}

// Slice the flights on the last 5 and print each flight
function logFiveLastFlights() {
  function printDestination(flight) {
    console.log(`Destination: ${flight.to}`);
  }

  console.log("These are the last 5 flights of the day:");
  flights.slice(-5).forEach(printDestination);
  console.log();
}

// Ask profile, if admin or user
function askCredentials() {
  let credentials;

  while (credentials !== "admin" && credentials !== "user") {
    credentials = prompt(
      `Please, enter your status, ${userName}: admin or user`
    ).toLowerCase();
  }
  return credentials;
}

// Show admin menu and return option that will be used to call respective function
function showAdminOptions() {
  let promptOption;

  while (promptOption !== "1" && promptOption !== "2") {
    promptOption = prompt(
      `Welcome to the administration menu, ${userName}.\n\nWhat would you like to do next:\n\n1 - Create flight\n2 - Eliminate flight`
    );
  }
  return promptOption;
}

// Create function to add ids in an array. This will be used to test if id provided by user it's contained or not in 'flights' array
function getIds(flight) {
  idsArray.push(flight.id);
}

// Function returns new flight with the same configuration as the other flights
function createFlight() {
  // Reset idsArray each time the loop restarts so we don't have repeated id's
  idsArray = [];
  // Add ids to array
  flights.forEach(getIds);

  alert(
    "Welcome to the menu Create Flights.\n\nPlease, complete the next questions correctly in order to add a new flight."
  );

  // Since the total number of flights allowed is 15, we'll only enter the block to create new flight if 'flights' lenght is less than 15
  if (flights.length < 15) {
    // The id will be generated randomly and will be unique
    let flightId;
    while (idsArray.includes(flightId) || flightId === undefined) {
      flightId = Math.floor(Math.random() * 10000);
    }
    let from;
    let to;
    let cost;
    let scale;

    // User won't pass to the next question until current question is not answered
    while (from === undefined || from === "" || from === null) {
      from = prompt("Flight Origin:");
    }

    while (to === undefined || to === "" || to === null) {
      to = prompt("Flight destination:");
    }

    while (
      cost === undefined ||
      Number.isNaN(cost) ||
      cost === "" ||
      cost === null
    ) {
      cost = prompt("Flight cost:");
    }
    cost = Number(cost);

    while (scale !== "true" && scale !== "false") {
      scale = prompt("Flight has scale true/false:");
    }
    // Transform _scale string value to boolean
    scale = scale === "true";

    flights.push({
      id: flightId,
      whereTo: to,
      whereFrom: from,
      flightCost: cost,
      hasScale: scale,
    });
    logFlights();
  } else {
    alert("You cannot add new flights.");
  }

  // Ask if user wants to repeat the operation
  let repeat;
  while (repeat !== "y" && repeat !== "n") {
    repeat = prompt("Would you like to repeat this operation y/n?");
  }
  if (repeat === "y") {
    createFlight();
  }
}

// Select flight id to be eliminated from flights array
function eliminateFlight() {
  // Reset idsArray each time the loop restarts so we don't have repeated id's
  idsArray = [];
  // Add ids to array
  flights.forEach(getIds);

  // Iniciate variable to hold id selected
  let idSelected;

  // Keep asking for id until it's included in 'flights', it's not null nor empty string
  while (
    !idsArray.includes(idSelected) ||
    idSelected === null ||
    idSelected === ""
  ) {
    idSelected = prompt(
      `These are the confirmed flights ids at the moment:\n\n${idsArray}\n\nInsert the flight id to be eliminated:`
    );
    idSelected = Number(idSelected);
  }

  // Loop 'flights' to find indexOf prompted id and remove selected id from 'flights'
  for (let i = 0; i < flights.length; i++) {
    if (idSelected === flights[i].id) {
      // console.log(flights[i].id, flights.indexOf(flights[i]))
      flights.splice(i, 1);
    }
  }

  logFlights();

  // Ask if user wants to repeat the operation
  let repeat;
  while (repeat !== "y" && repeat !== "n") {
    repeat = prompt("Would you like to repeat this operation y/n?");
  }
  if (repeat === "y") {
    eliminateFlight();
  }
}

// Show user menu and return option that will be used to call respective function (right now, we only have one option)
function showUserOptions() {
  let promptOption;

  while (promptOption !== "1") {
    promptOption = prompt(
      `Welcome to the user's menu, ${userName}.\n\nWhat would you like to do next:\n\n1 - Search flight by price`
    );
  }
  return promptOption;
}

// Search and show all flights that are equal or lower than price prompted by user. Ask the flight id to be purchased and show purchased flight
function searchFlightByPrice() {
  let price;

  // Keep prompting until we get a number value
  while (
    price === undefined ||
    Number.isNaN(price) ||
    price === "" ||
    price === null
  ) {
    price = prompt("What's the maximum price you'd like to pay:");
  }

  // Function to print flights within price conditional. We are using the previous made function to print the flights, printFlight()
  function logFlightsByPrice(flight) {
    if (price >= flight.cost) {
      printFlight(flight);
    }
  }
  console.log(`These are the flights available for €${price} or cheaper:`);
  // Call the function and actually print the flights
  flights.forEach(logFlightsByPrice);
  // Print blank line
  console.log();

  // Flight id to be bought by user
  let flightIdToBePurchased;

  // Reset idsArray each time the loop restarts so we don't have repeated id's
  idsArray = [];
  // Add ids to array
  flights.forEach(getIds);

  // Keep prompting user until a valid id is returned
  while (
    !idsArray.includes(flightIdToBePurchased) ||
    flightIdToBePurchased === null ||
    flightIdToBePurchased === ""
  ) {
    flightIdToBePurchased = prompt(
      `Please insert the flight id that you desire to buy:`
    );
    flightIdToBePurchased = Number(flightIdToBePurchased);
  }

  // variable to hold choosen flight
  const choosenFlight = flights.filter(
    (flight) => flight.id === flightIdToBePurchased
  )[0];

  alert(
    `Here is your purchased flight:\n\nFlight id: ${choosenFlight.id}\nFrom: ${
      choosenFlight.whereFrom
    }\nTo: ${choosenFlight.whereTo}\nPrice: ${
      choosenFlight.flightCost
    }\nDirect Flight: ${boolToWord(
      choosenFlight.hasScale
    )}\n\nThanks for your purchase, ${userName}!`
  );
}

function main() {
  // variable to receive the admin's/user's option that will call the respective function
  let promptOption;

  // Variable to be used for continuous admin/user operations
  let promptContinue;

  userName = welcome();
  logFlights();
  logAverageFlightsPrice();
  logScaledFlights();
  logFiveLastFlights();

  // Variable for user's profile
  const credentials = askCredentials();

  if (credentials === "admin") {
    while (promptContinue !== "exit") {
      promptOption = showAdminOptions();
      if (promptOption === "1") {
        createFlight();
      } else if (promptOption === "2") {
        eliminateFlight();
      }
      promptContinue = prompt(
        'Type "exit" to leave the program or enter to continue:'
      ).toLowerCase();
    }
  } else if (credentials === "user") {
    while (promptContinue !== "exit") {
      promptOption = showUserOptions();
      if (promptOption === "1") {
        searchFlightByPrice();
      }
      promptContinue = prompt(
        'Type "exit" to leave the program or enter to continue:'
      );
    }
  }
}

main();
