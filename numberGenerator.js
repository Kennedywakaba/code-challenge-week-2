function generateArray(start, end) {
    const result = [];
  
    const step = start <= end ? 1 : -1;
    for (let i = start; i !== end + step; i += step) {
      // Add each number to the result array
      result.push(i);
    }
  
    // Return the generated array
    return result;
  }