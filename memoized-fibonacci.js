
const fibonacci = (function() {
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

console.log(fibonacci(4));
console.log(fibonacci(8));