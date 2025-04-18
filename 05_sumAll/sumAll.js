const sumAll = function(min,max) {
    if ((!Number.isInteger(min) || !Number.isInteger(max)|| max < 0 || min < 0)){
        return "ERROR";
    }
    if (min > max){
        temp = max;
        max = min;
        min = temp;
    }
    let sum = 0;
    for (let i = min; i <= max; i++){
        sum += i;
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
