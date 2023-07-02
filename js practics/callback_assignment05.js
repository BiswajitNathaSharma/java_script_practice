function greetPerson(name) {
  return new Promise((resolve, reject) => {
    // Check if the name is provided
    if (name) {
      const greeting = `Hello, ${name}!`;
      resolve(greeting);
    } else {
      reject(new Error('No name provided.'));
    }
  });
}

// Example usage
const name = "Mithun";
greetPerson(name)
  .then(greeting => {
    console.log(greeting); // Hello, Mithun!
  })
  .catch(error => {
    console.error(error); // This will not be executed in this example
  });
