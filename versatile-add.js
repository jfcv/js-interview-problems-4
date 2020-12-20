
// scoping - returning ! -> that's it

function add(a,b) {

    if(a === undefined) {
        return add; // recursion
    } 

    // all the variables inside add(a,b) are accessible by the inner function when it's called.
    if(b === undefined) {
        return function innerAdd(c) {
            if(c === undefined) {
                return innerAdd; // recursion
            }
            return a + c;
        }
    }

    return a + b;

}

/*
console.log(add(4,3));
console.log(add(10,12));
console.log(add(4)(3));
console.log(add(10)(12));
*/

console.log(add()(3)(4));
console.log(add()()()(10)(12));
console.log(add()(3)()(4));
console.log(add()()()()()(10)()()()(12));

// MAIN LEARNING from THIS 
// a function retains access to the scope that it was created in