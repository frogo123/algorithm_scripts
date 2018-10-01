//selective sort algorithm
function selectiveSort(arr){
//loop 1
for (let i = 0; i<arr.length-1; i++){
//loop2
    for (let j = i+1; j<arr.length; j++){
        if (arr[i] > arr[j]){
            swap(i, j);
        }
    }
}
return arr;
}
//swap function
function swap (elementOneIndex, elementTwoIndex){
    let temp = arr[elementOneIndex]
    arr[elementOneIndex] = arr[elementTwoIndex];
    arr[elementTwoIndex] = temp;
}

//arr is your array to sort
arr = [1, 34, 45, 23, 44, 89 , 2, 3];

console.log(selectiveSort(arr));