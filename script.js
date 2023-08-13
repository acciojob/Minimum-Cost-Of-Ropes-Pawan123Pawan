function calculateMinCost(arr) {
  //your code here
  if (arr.length <= 1) {
        return 0; // No cost if there's only one or no ropes
    }

    let totalCost = 0;
    arr.sort((a, b) => a - b); // Sort the ropes in ascending order

    while (arr.length > 1) {
        const sum = arr[0] + arr[1]; // Take the two smallest ropes
        totalCost += sum; // Add their sum to the total cost
        arr.splice(0, 2); // Remove the two smallest ropes
        arr.push(sum); // Add the sum back to the ropes
        arr.sort((a, b) => a - b); // Re-sort the ropes
    }

    return totalCost;
}  
