const fibonacci = function(count) {

    if (count < 0) return "OOPS";

    if(typeof count !== 'number') count = parseInt(count);

    let fib = [0, 1];
    for (let i = 2; i <= count; i ++) {
        fib[i] = fib[i - 1] + fib[i - 2]; 
    }
    return fib[count];
};

// Do not edit below this line
module.exports = fibonacci;


// const 3   i = 2 
// 0 1 1 
// const 5   i = 2 
// 0 1 1 2 3 5
//
