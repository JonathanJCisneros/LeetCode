/**
 * @param {string} s
 * @return {number}
 */
 var myAtoi = function(s) {
    let fix = s.split(' ');
    for(let i = 0; i < fix.length; i ++){
        let search = parseInt(fix[i]);
        if(isNaN(search)){
            continue;
        }
        return search;
    }
    return 0;
};

console.log(myAtoi('   words   funny   1243'))
console.log(myAtoi('0032   '))