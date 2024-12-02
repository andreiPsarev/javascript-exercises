const repeatString = function(myString, num) {
    let result = '';
    if(num < 0){
        return "ERROR";
    }
    for (let i = 0; i < num; i++){
        result += myString;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
