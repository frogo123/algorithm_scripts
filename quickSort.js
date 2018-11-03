//quick sort algorithm
//swap function
function swap(array, indexOne, indexTwo) {
    if (indexOne === indexTwo) return;
    let temp = array[indexOne];
    array[indexOne] = array[indexTwo];
    array[indexTwo] = temp;
    return array;
}

function quickSortFunction(i, array, pivotIndex, endIndex) {
    //recurCheck is set to the start of the loop to compare later to counter 
    //used to swap pivotIndex if swaps have been made
    let recurCheck = i;
    let counter = i;
    let swapIndex = pivotIndex + 1;
    while ( i < endIndex) {
        if (array[pivotIndex] > array[i]) {
            swap(array, swapIndex, i);
            counter++;
            swapIndex++;
        }
        i++
    }
    //lastly to complete loop if counter has been increased
    //use swap to switch the pivotIndex element above the lower in value switched elements
    if (counter !== recurCheck) swap(array, pivotIndex, counter-1);

    //set sequenceCheck to 0 and increase by 1 for each correct comparson
    let sequenceCheck = 0;
    for (let j = 0; j < array.length - 1; j++) {
        if (array[j] < array[j + 1]) {
            sequenceCheck++;
        } else {
            break;
        }
    }
    //check squenceCheck against array.length if equal set resultCheck to true 
    if (sequenceCheck === array.length - 1) {
        resultCheck = true;
    }

    //if resultCheck is false continue recursion with quickSortFunction
    if (resultCheck === false) {
        //if counter is not equal to recurCheck continue recursion on first divide of array
        if (counter !== recurCheck) array = quickSortFunction(1, array, 0, counter-1);
        //if counter+1 is less than array.length use recursion to sort second divide of array
        if (counter+1 < array.length) array = quickSortFunction(counter+1, array, counter, array.length);
    }
    return array;
}
//if resultCheck true recursion end and return sorted array
let resultCheck = false;
let testArray = [0, 1, 2, 2342340, 0, 9, 8];
console.log(quickSortFunction(1, testArray, 0, testArray.length));