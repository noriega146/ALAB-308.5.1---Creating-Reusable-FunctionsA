//1. 

//A. Sum of an array of numbers:
function sumArray(numbers) {
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    return sum;
  }
  
  // Test usage:
  const numbers1 = [1, 2, 3, 4, 5];
  console.log(sumArray(numbers1)); // Output: 15
  