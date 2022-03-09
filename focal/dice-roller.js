const diceRoller = function() {
  let rollsArray = [];
  let arg = Number(argus[2]);
  for (let i = arg; i > 0; i-- ) {
    console.log("------------")
    let rolls = Math.floor(Math.random()*6) + 1;
    rollsArray.push(rolls);
    console.log(rollsArray);
  }
  return "Rolled " + arg + " dice: " + rollsArray.join(", ");
}
const argus = process.argv;
console.log(diceRoller());