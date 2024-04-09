function swapCase(str) {
    // Initialize an empty string to put the swapped characters
    let swappedStr = '';
    
    for (let i = 0; i < str.length; i++) {
      // Get the character at the current index
      const char = str.charAt(i);
      
      // Check if the character is uppercase
      if (char === char.toUpperCase()) {
        // If uppercase, convert it to lowercase and add it to the result string
        swappedStr += char.toLowerCase();
      } else {
        // If lowercase, convert it to uppercase and add it to the result string
        swappedStr += char.toUpperCase();
      }
    }
}