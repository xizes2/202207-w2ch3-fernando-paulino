const flights = [
  { id: 0, to: "Bilbao", from: "Barcelona", cost: 1600, scale: false },

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

const flightsList = [];

const scaledFlightsList = [];

const lastFiveFlights = [];

const userName = () => {
  const name = prompt("Please, enter your name:");
  return name;
};

const welcome = () => {
  alert(`Welcome to Skylab Airlines, ${userName}!`);
};

// Change boolean value to 'yes' or 'no' to show more user friendly is flight has scale or not
function boolToWord(bool) {
  return bool ? "no" : "yes";
}

// Add flights with more friendly aspect to flightList array
function makeFlightList(flight) {
  flightsList.push([
    `Flight id: ${flight.id}, From: ${flight.from}, To: ${flight.to}, Price: ${
      flight.cost
    }, Direct Flight: ${boolToWord(flight.scale)}`,
  ]);
}

// Use forEach method to loop flights array
function loopFlights() {
  flights.forEach(makeFlightList);
}

function logAverageFlightsPrice() {
  let totalPrice = 0;

  for (let i = 0; i < flights.length; i++) {
    totalPrice += flights[i].cost;
  }
  alert(
    `\nAverage Ticket Price: ${(totalPrice / flights.length).toFixed(2)} €`
  );
}

let countScaledFlights = 0;
// Log all flights with scale and their total count
function ScaledFlights() {
  // First we count how many scaled flights are there
  for (let i = 0; i < flights.length; i++) {
    if (flights[i].scale === true) {
      countScaledFlights += 1;
    }
  }

  // Second we add those flights to scaledFlightsList array
  for (let i = 0; i < flights.length; i++) {
    if (flights[i].scale === true) {
      scaledFlightsList.push([
        `Flight id: ${flights[i].id}, From: ${flights[i].from}, To: ${
          flights[i].to
        }, Price: ${flights[i].cost}, Direct Flight: ${boolToWord(
          flights[i].scale
        )}`,
      ]);
    }
  }
}

// Slice the flights on the last 5 and push each flight into the array lastFiveFlights
function FiveLastFlights() {
  function printDestination(flight) {
    lastFiveFlights.push(`Destination: ${flight.to}`);
  }

  flights.slice(-5).forEach(printDestination);
}

function main() {
  welcome();

  loopFlights();
  console.log("These are the flights available for today:");
  console.log("\n");
  console.log("\n");
  console.log(flightsList.join("\n"));

  logAverageFlightsPrice();

  ScaledFlights();
  alert(
    `These are all the ${countScaledFlights} scaled flights for today: ` +
      `\n\n${scaledFlightsList.join("\n")}`
  );

  FiveLastFlights();
  alert(
    `These are the destination of the last 5 flights of the day:` +
      `\n\n${lastFiveFlights.join("\n")}`
  );
}

main();

export default userName;
