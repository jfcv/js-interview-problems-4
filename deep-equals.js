
function deepEquals(a,b) {

    // 1. if both are NaN
    if (Number.isNaN(a) && Number.isNaN(b)) {
        return true;
    }

    // 2. if different types
    if (typeof a !== typeof b) {
        return false;
    }

    // 3. if they're not objects or if either one is null
    if(typeof a !== 'object' || a === null || b === null) {
        return a === b;
    }

    // 4. ensure a, b have the same # of properties
    if(Object.keys(a).length !== Object.keys(b).length) {
        return false;
    }

    // 5. loop through to ensure all keys & values are identical
    for (const key in a) {
        if(!deepEquals(a[key],b[key])) {
            return false;
        }
    }

    return true;
}

console.log(
    deepEquals({a:1,b:3},{a:1,b:2}),
    deepEquals([1,2],[1,2]),
    deepEquals(null,null),
);