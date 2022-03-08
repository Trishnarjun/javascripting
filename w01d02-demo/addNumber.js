const addNumbers = function(arr) {
  let counter = 0;
  for (let i = 0; i < newArry.length; i++) {  
    //adding the numbers
    counter += Number(arr[i]);
    }
  // printing result 
  console.log(counter);
};

const argus = process.argv
const newArry = argus.slice(2);
addNumbers(newArry);