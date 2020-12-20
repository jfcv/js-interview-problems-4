
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

const memoized = (function() {
    const seq = [1,1];
    return function(n) {
        if(seq.length > n) {
            return seq.slice(0, n);
        }
        while(seq.length < n) {
            seq.push(seq[seq.length-1]+seq[seq.length-2]);
        }
        return seq;
    }

})(); //IIFE

const ITERATIONS = 1000;
console.time('naive');
for (let i = 0; i < ITERATIONS; i++) {
    fibonacci(ITERATIONS);
}
console.timeEnd('naive');

console.time('memoized');
for (let i = 0; i < ITERATIONS; i++) {
    memoized(ITERATIONS);
}
console.timeEnd('memoized');
