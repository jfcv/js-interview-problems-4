
function fibonacci(n, prevValues = [], result = 0) {
    if(prevValues[n]) {                                                             // memoization
        return prevValues[n]; //it returns even before calculating given the value
    }
    if(n <= 2) {
        result = 1;
    } else {
        result = fibonacci(n-1, prevValues) + fibonacci(n-2, prevValues);           // recursion
    }
    prevValues[n] = result;
    return result;
}

console.log(
    fibonacci(35),
    fibonacci(30),
    fibonacci(25),
    fibonacci(20),
);