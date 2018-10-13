//insertion sort example
function insertionSort (arr) {
    for (let i = 1; i<arr.length; i++){
            let temp = arr[i];
        for (var j = i-1; j>0 && temp<arr[j]; j--){
            arr[j+1] = arr[j];
        }
        if (temp < arr[j]){
        arr[j+1] = arr[j]
        arr[j] = temp;
        }
        else{
            arr[j+1] = temp;
        }
    }
    return arr;
}
//test array
let arr = [5, 3, 2, 1, 3000, 40000, 0];
console.log(insertionSort(arr));
