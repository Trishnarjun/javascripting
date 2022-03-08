const addNumbers = function() {
  const argus = process.argv
  const newArry = argus.slice(2);
  let counter = 0;
  for (let i = 0; i < newArry.length; i++) {  
    //adding the numbers
    counter += Number(newArry[i]);
    }
  // printing result 
  console.log(counter);
};
addNumbers();