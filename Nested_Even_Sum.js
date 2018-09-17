function nestedEvenSum (obj) {
    let result = 0;
    let keysArr;
    //if obj is an instance of Object set obj keys into keysArr
    if (obj instanceof Object){
    keysArr = Object.keys(obj);
    }
    for (let i=0; i<keysArr.length; i++){
        //if obj[keysArr[i]] is another Object implement nestEvenSum again using obj[keysArr[i]]
        if (obj[keysArr[i]] instanceof Object){
            result += nestedEvenSum(obj[keysArr[i]])
            //else if value is a number
        } else if (typeof obj[keysArr[i]] === 'number') {
            if (obj[keysArr[i]] % 2 === 0){
            //add the even value of object property to result
            result += obj[keysArr[i]];
            }
        }
    }
    return result;
  }
  var obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
  };

  var obj1 = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup"
      }
    }
  }
  

console.log(nestedEvenSum(obj2))