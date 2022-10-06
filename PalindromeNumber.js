/**
 * @param {number} x
 * @return {boolean}
 */
function isPalindrome(x){
    if(x < 0){
        return false;
    }
    let array = String(x).split('').map(Number)
    let start = 0
    let end = array.length - 1
    while(start < end){
        if(array[start] !== array[end]){
            return false;
        }
        start++;
        end--;
    }
    return true;
};

console.log(isPalindrome(121))
console.log(isPalindrome(-121))
console.log(isPalindrome(2222))
console.log(isPalindrome(-2222))