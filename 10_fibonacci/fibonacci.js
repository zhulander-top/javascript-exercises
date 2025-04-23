const fibonacci = function(num) {
    num = parseInt(num);
    if (num < 0){
        return "OOPS";
    }
    if (num == 0){
        return 0;
    }
    const fib = [0, 1];
    for (let i = 2; i <= num; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib[num];
};

// Do not edit below this line
module.exports = fibonacci;
