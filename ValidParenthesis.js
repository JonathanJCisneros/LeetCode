/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let check = []
    for(let i = 0; i < s.length; i++){
        let char = check[check.length - 1]
        if(s[i] === '(' || s[i] === '{' || s[i] === '['){
            check.push(s[i])
        }
        else if((char === '(' && s[i] === ')') || (char === '{' && s[i] === '}') || (char === '[' && s[i] === ']')){
            check.pop()
        }
        else{
            return false
        }
    }
    return check.length? false: true
};

console.log(isValid("()()()()"))
