function someRecursion(arr, callback) {
    if(arr.length===0){
        return false;
    }
    if (callback(arr[0])){
        return true;
    } else {
        return someRecursion(arr.slice(1), callback);
    }
}
console.log(someRecursion([1,2,3,46,98,3], ele => ele===5))