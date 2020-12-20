
function fibonacci(n) {
    let fibo = [];
    for (let i = 0; i < n; i++) { //O(n)
        if (i < 2) {
            fibo.push(1);
        } else {
            fibo.push(fibo[fibo.length-1]+fibo[fibo.length-2]);
        }
    }
    return fibo;
}

console.log(
    fibonacci(4),
    fibonacci(6),
    fibonacci(8),
);