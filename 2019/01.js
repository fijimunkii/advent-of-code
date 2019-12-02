const fs = require('fs');
const path = require('path');
const data = fs.readFileSync(path.join(__dirname,'01.txt'))
  .toString()
  .split('\n');

// divide by three, round down, and subtract 2
const fuel = data.map(d => Math.floor(d / 3) - 2)
const fuelTotal = fuel.reduce((acc,d) => acc+d);
 
let fuelForTheFuel = 0;
function calculateFuel(input) {
  const output = Math.floor(input / 3) - 2;
  if (output < 0) return;
  fuelForTheFuel += output;
  return calculateFuel(output);
}
fuel.forEach(f => calculateFuel(f));
const fuelFuelTotal = fuelTotal + fuelForTheFuel;

console.log(`Part 1: ${fuelTotal}`);
console.log(`Part 2: ${fuelFuelTotal}`);
