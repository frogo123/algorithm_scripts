function isPalindrome(str, start = 0, end=str.length-1) {
    if (start<end){
        start++;
        end--
        return (str[start]===str[end]?isPalindrome(str, start, end):false);
    } else{
        return true;
    }
}
console.log(isPalindrome("ee"))