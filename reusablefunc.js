//1. 

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



