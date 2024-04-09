function numPrime(num) {
    // Prime numbers are greater than 1
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        // If num is divisible by any number other than 1 and itself, it's not prime
        return false;
      }
    }
    return true;
  }
  
  function filterPrimeNumbers(arr) {
    // Use the filter method to create a new array containing only prime numbers
    return arr.filter(num => numPrime(num));
  }