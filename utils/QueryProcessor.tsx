export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("andrew id")) {
    //TODO add your Andrew ID below
    //TODO update the corresponding test case in __tests__
    return ( "aabdalja" );
  }

   if (query.includes("What is your name?")) {
    //TODO add your Andrew ID below
    //TODO update the corresponding test case in __tests__
    return ( "aabdalja" );
   }
  
  if (query.includes("Which of the following numbers is the largest:")) {
    // Extract the numbers from the query
    const numberPattern = /(\d+)/g; // Regular expression to find all numbers
    const numberStrings = query.match(numberPattern); // Find all matches

    if (numberStrings) {
        // Convert found strings to numbers
        const numbers = numberStrings.map(num => parseInt(num, 10));
        // Determine the largest number
        const largestNumber = Math.max(...numbers);
        // Return the largest number as a string
        return `${largestNumber}`;
    }
  }

  if (query.includes("What is") && query.includes("plus")) {
    // Extract numbers from the query
    const numberPattern = /(\d+)/g; // Regular expression to find all numbers
    const numberStrings = query.match(numberPattern); // Find all matches

    if (numberStrings && numberStrings.length === 2) {
        // Convert number strings to integers
        const num1 = parseInt(numberStrings[0], 10);
        const num2 = parseInt(numberStrings[1], 10);
        // Perform addition
        const result = num1 + num2;
        // Return the result as a string
        return `${result}`;
    }
  }
  
  function checkIfSixthPower(n: number) {
    let root = Math.round(Math.pow(n, 1/6));
    return Math.pow(root, 6) === n;
}

if (query.includes("Which of the following numbers is both a square and a cube:")) {
    // Extract numbers from the query
    const numberPattern = /(\d+)/g; // Regular expression to find all numbers
    const numberStrings = query.match(numberPattern); // Find all matches

    if (numberStrings) {
        // Filter to find numbers that are both squares and cubes
        const results = numberStrings.filter(num => checkIfSixthPower(parseInt(num, 10)));

        // Return the results as a comma-separated string
        return results.length > 0 ? `The numbers are: ${results.join(', ')}.` : "No numbers meet the criteria.";
    }
}

  
if (query.includes("What is") && query.includes("multiplied")) {
    // Extract numbers from the query
    const numberPattern = /(\d+)/g; // Regular expression to find all numbers
    const numberStrings = query.match(numberPattern); // Find all matches

    if (numberStrings && numberStrings.length === 2) {
        // Convert number strings to integers
        const num1 = parseInt(numberStrings[0], 10);
        const num2 = parseInt(numberStrings[1], 10);
        // Perform addition
        const result = num1 * num2;
        // Return the result as a string
        return `${result}`;
    }
  }
  

  return "";
}
