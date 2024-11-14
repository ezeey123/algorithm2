function insertionSort(arr) {
    // Loop through all elements starting from the second one (index 1)
    for (let i = 1; i < arr.length; i++) {
        // Store the current element (arr[i]) in a variable
        let current = arr[i];
        
        // Initialize j to the index of the previous element (i - 1)
        let j = i - 1;

        // Move elements of arr[0..i-1] that are greater than current to one position ahead of their current position
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j]; // Shift element one position to the right
            j--; // Move to the next element in the sorted portion
        }

        // Insert the current element into its correct position
        arr[j + 1] = current;
    }
    return arr; // Return the sorted array
}

// Example :
const arr = [12, 11, 13, 5, 6];
console.log('Original Array:', arr);
console.log('Sorted Array:', insertionSort(arr));
