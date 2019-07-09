(function () {
    "use strict"

    // Return a memoized version of f.
    // It only works if arguments to f all have distinct string representations.
    function memoize(f) {
        const cache = {}; // Value cache stored in the closure.

        return function() {
            // Create a string version of the arguments to use as a cache key.
            let key = arguments.length + Array.prototype.join.call(arguments, ",");
            if (key in cache) return cache[key];
            else return cache[key] = f.apply(this, arguments);
        };
    }

    // Return the Greatest Common Divisor of two integers, using the Euclidian
    function gcd(a, b) {
        let t;
        if (a < b) {
            t = b;
            b = a;
            a = t;
        }

        while (b !== 0) { // Type checking for a and b has been omitted
            t = b;          // Temporary variable for swapping values
            b = a % b;      // Ensure that a >= b
            a = t;          // This is Euclid's algorithm for GCD
        }
        return a;
    }

    const gcdmemo = memoize(gcd);
    console.log('%cgcdMemo: ', 'color: red;', gcdmemo(85, 187));
    
})();