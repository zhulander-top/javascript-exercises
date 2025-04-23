const palindromes = function (str) {
    str = str.toLowerCase();
    str = str.split('').filter(char => {
        return /[a-z0-9]/.test(char); 
    }).join('');
    return str === str.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
