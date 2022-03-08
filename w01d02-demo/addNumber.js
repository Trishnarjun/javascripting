const argus = process.argv
const newArry = argus.slice(2);
console.log(newArry);
let counter = 0;
for (let i = 0; i < newArry.length; i++) {  
  counter += Number(newArry[i]);
  }
console.log(counter);
