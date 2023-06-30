function doubleArray(arr, callback) {
    const doubledArray = [];
  
    for (let i = 0; i < arr.length; i++) {
      const doubledValue = callback(arr[i]);
      doubledArray.push(doubledValue);
    }
  
    return doubledArray;
  }
// Example callback function that doubles a number
function doubleNumber(num) {
    return num * 2;
  }
  
  const numbers = [1, 2, 3, 4, 10];
  const doubledNumbers = doubleArray(numbers, doubleNumber);
  console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
    