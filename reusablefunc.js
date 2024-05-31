//1. 

//A. Sum of an array of numbers:
function sumarray(numbers) {
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    return sum;
  }
  
  
  //AVG of an array of numbers:
  function averagearray(numbers){
    if (numbers.lenght === 0) return 0; // avoids dividing by zero
    const avg = sumarray(numbers) / numbers.lenght;
    return avg;
  }