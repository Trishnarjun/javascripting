const addNumbers = function(arr) {
  let counter = 0;
  for (let element of arr) {  
    counter += Number(element);
    }
  return counter;
};

const argus = process.argv;
const newArry = argus.slice(2);
console.log(addNumbers(newArry));