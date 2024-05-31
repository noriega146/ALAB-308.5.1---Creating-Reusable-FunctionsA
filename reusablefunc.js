//Part 1: Thinking Functionally 

//A. Sum of an array of numbers:
function sumarray(numbers) {
    const sum = numbers.reduce((acc, curr) => acc + curr, 0); // uses .reduce to sum contents of array
    return sum;// returns sum of array 
  }
  
  
//B. AVG of an array of numbers:
function averagearray(numbers){
    if (numbers.lenght === 0) return 0; // avoids dividing by zero
    const avg = sumarray(numbers) / numbers.lenght; // Uses sumarray to get sum and then divide by .lenght of array
    return avg; // = array sum average
  }


//C.Take an array of strings and return the longest string:
function longeststring(strings){
  return strings.reduce((longest, current) => current.lenght > longest.lenght ? current : longest, "" ); // goest thru the strings until current.lenght > lonets.lenght  returns longest string
}

//D: Take an array of strings and a number, return an array of strings longer than the given number:
function stringslongerthan(strings, length) {
  return strings.filter(str => str.length > length); // iterates thru the strings returns new array with elements the callback func returns true str => str.length > length
}

//D.Take a number, n, and print every number between 1 and n without using loops. Use recursion.
function printnum(n){
  if (n <=0){
    return; // stop when n <=0
  }
  printnumbers(n-1); //recursively call printnumbers with n-1
  console.log(n); //Print value of n
}


//Part 2: Thinking Methodically

const data = [
  { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
  { id: "48", name: "Barry", occupation: "Runner", age: "25" },
  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
  { id: "7", name: "Bilbo", occupation: "None", age: "111" }
];

//A. Sorting the array by age
// .sort creates new array called sortedbyage the fills and sorts the array by comparing 2 elements a.age, b.age. 
//func subtracts a.age from b.age if result negative a comes before b if positive b comes before a if zero order remains unchanged.
const sortedbyage = data.slice().sort((a, b) => a.age - b.age);

//B. Filter the array to remove entries with an age greater than 50.
//.filter creates a new array with all elements that pass the function test person => person.age <= 50
const filteredByAge = data.filter(person => person.age <= 50); // remove entries with an age greater than 50 


//C. Map the array to change the “occupation” key to “job” and increment every age by 1
const mappedData = data.map(person => ({   //.map creates new array with results of callbackfunc
  ...person,
  job: person.occupation, // Change the "occupation" key to "job"
  age: parseInt(person.age) + 1 // Increment the age by 1
}));

//D. Use reduce to calculate the sum of the ages
const totalAge = data.reduce((sum, person) => sum + (person.age), 0); 
// .reduce sums up all ages then uses callbackfunc (sum, person) => sum + (person.age) to get sum 

//E. Calculate the average age
const averageAge = totalAge / data.length;
//uses totalage / data.lenght to get av  .lenght gets the lenght of the array


//Part 3: Thinking Critically

//A.Take an object and increment its age field:
function incrementAge(obj) {
  if (!obj.age) {
    obj.age = 0;
  }
  obj.age++;
  obj.updated_at = new Date();
  return obj;
}


