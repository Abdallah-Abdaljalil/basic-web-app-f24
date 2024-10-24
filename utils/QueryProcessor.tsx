// Function to check if a number is both a square and a cube (i.e., sixth power)
function isSixthPower(n: number) {
    let sixthRoot = Math.round(Math.pow(n, 1/6));
    return Math.pow(sixthRoot, 6) === n;
}

// Function to check if a number is prime
function isPrime(n: number) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
}

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

  if (query.includes("What is") && query.match(/\bplus\b/g)) {
    // Extract numbers from the query
    const numberPattern = /(\d+)/g; // Regular expression to find all numbers
    const numberStrings = query.match(numberPattern); // Find all matches

    // Convert number strings to integers and sum them
    if (numberStrings) {
        const result = numberStrings.reduce((sum, num) => sum + parseInt(num, 10), 0);
        return `${result}`;
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
  
//  if (query.includes("Which of the following numbers is both a square and a cube:")) {
//     // Extract numbers from the query
//     const numberPattern = /(\d+)/g;
//     const numberStrings = query.match(numberPattern);

//     if (numberStrings) {
//         // Convert strings to numbers and filter for sixth powers
//         const sixthPowers = numberStrings.map(Number).filter(isSixthPower);

//         // Return the result
//         return '${sixthPowers.join(', ')}.';
//     }
// }

  
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
  
  if (query.includes("What is") && query.includes("minus")) {
    // Extract numbers from the query
    const numberPattern = /(\d+)/g; // Regular expression to find all numbers
    const numberStrings = query.match(numberPattern); // Find all matches

    if (numberStrings && numberStrings.length === 2) {
        // Convert number strings to integers
        const num1 = parseInt(numberStrings[0], 10);
        const num2 = parseInt(numberStrings[1], 10);
        // Perform addition
        const result = num1 - num2;
        // Return the result as a string
        return `${result}`;
    }
  }

if (query.includes("Which of the following numbers are primes:")) {
  // Extract numbers from the query
  const numberPattern = /(\d+)/g;
  const numberStrings = query.match(numberPattern);

  if (numberStrings) {
      // Convert strings to numbers and filter for primes
      const primes = numberStrings.map(Number).filter(isPrime);

      // Return the prime numbers
      return primes.length > 0 ? primes.join(', ') : "None";
  }
}


  
if (query.includes("What is") && query.includes("to the power of")) {
    // Extract numbers from the query
    const numberPattern = /(\d+)/g; // Regular expression to find all numbers
    const numberStrings = query.match(numberPattern); // Find all matches

    if (numberStrings && numberStrings.length === 2) {
        // Extract base and exponent
        const base = parseInt(numberStrings[0], 10);
        const exponent = parseInt(numberStrings[1], 10);
        // Compute the power
        const result = Math.pow(base, exponent);

        // Return the result as a string
        return `${result}`;
    }
}

   if (query.includes("plus") && query.includes("multiplied by")) {
        // Detect the order of operations in the query
        const parts = query.split(' ');
        const numberStrings = query.match(/\d+/g);
        const numbers = numberStrings ? numberStrings.map(Number) : [];
        let result = 0;

        // Determine operation order and calculate result based on keywords
        if (query.indexOf("plus") < query.indexOf("multiplied by")) {
            // Addition comes before multiplication in the text
            result = numbers[0] + (numbers[1] * numbers[2]);
        } else {
            // Multiplication comes before addition in the text
            result = (numbers[0] * numbers[1]) + numbers[2];
        }
        return `${result}`;
    }



  return "";
}
