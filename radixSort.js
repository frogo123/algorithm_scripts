//Radix Sort Algorithm
//digitCount is a function which counts the number of digits a number has
//If digitCount compares many numbers the highest count is returned
function digitCount (num) {
    return num.toString().length-1;
}

//numValue returns the value of the digit of the index passed in
//indexes are from left to right
function numValue (num, i) {
    return Math.floor((Math.abs(num / (10 ** i))) % 10) 
}

//radix sorting function
function radixSort (arr) {
    let max = 0;
    //find the largest number in terms of digits
    for (let num of arr) {
        max = Math.max(max, digitCount(num))
    }
    let i = 0;
    //while i < than the greatest number of digits from one number
    while (i < max) {
    //create an array with 10 sub arrays
    let tempArr = [];
    for (let j = 0; j < 10; j++) {
        tempArr.push([]);
    }
    //sort and push numbers into tempArr depending on the value of the digit being assessed
        for (let num of arr) {
            let j = numValue(num, i)
            tempArr[j].push(num);
        }
        //reassign the tempArr to arr
        arr = [].concat(...tempArr);
        i++;
    }
    return arr;
}

console.log(radixSort ([123, 99, 11111, 90, 12, 123345, 01, 23232323333]))
