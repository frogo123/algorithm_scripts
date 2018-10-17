//an example of merge sort algorithm
function mergeSort(arr1, arr2) {
    let newArr = [];
    let i = 0;
    let j = 0;
//loop through arrays until one is exhausted of elements
    while(i < arr1.length && j < arr2.length ) {
        if (arr1[i] <= arr2[j]){
            newArr.push(arr1[i]);
            i++;
        }
        else {
            newArr.push(arr2[j]);
            j++
        }
        
    }
//loop through the elements of the remaining array
    if (i === arr1.length){
        while(j !== arr2.length){
        newArr.push(arr1[j]);
        j++;
        }
    }
    else {
        while(i !== arr1.length){
        newArr.push(arr1[i])
        i++
        }
    }
    return newArr
}

console.log(mergeSort([1, 2, 3, 4, 8, 9, 110], [6, 7]))