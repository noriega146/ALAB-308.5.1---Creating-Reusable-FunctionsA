//1. 

//A. Sum of an array of numbers:
function sumarray(numbers) {
    const sum = numbers.reduce((acc, curr) => acc + curr, 0); // uses .reduce to sum contents of array
    return sum;// returns sum of array 
  }
  
  
  //AVG of an array of numbers:
function averagearray(numbers){
    if (numbers.lenght === 0) return 0; // avoids dividing by zero
    const avg = sumarray(numbers) / numbers.lenght; // Uses sumarray to get sum and then divide by .lenght of array
    return avg; // = array sum average
  }


  //


