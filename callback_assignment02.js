const string = "Hello, World!";
const logManipulatedString = manipulateString(string);

logManipulatedString(); // Output: The manipulated string is: HELLO, WORLD!
function manipulateString(str) {
    const manipulatedString = str.toUpperCase();
  
    function logString() {
      console.log("The manipulated string is: " + manipulatedString);
    }
  
    return logString;
  }
  