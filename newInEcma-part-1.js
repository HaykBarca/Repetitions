;(function() {
    "use strict";
    
    //Array.prototype.includes checks if value is in array
    var arr = [1, 2, 'Hayk', NaN];
    console.log(arr.includes(1));
    console.log(arr.includes('dddfdf'));
    console.log(arr.includes(NaN));

    // ** Exponentiation infix operator like Math.pow
    var num = 3;
    console.log(num**2);
    console.log(num**num);
    console.log(Math.pow(num, 2));

    // Object.values similar to OObject.keys, returns array in this case of values
    var obj = {
        name: 'Hayk',
        age: 25,
        languages: {
            es6: true,
            es7: 'in progress'
        }
    }

    console.log(Object.values(obj));
    console.log(Object.keys(obj));

    //Object.entries returns keys and values in array
    console.log(Object.entries(obj));

    //String paddings, String.padStart and String.padEnd return formatted string
    //this adding choosen amount of choosen characters either from end or from start
    var charArr = [12, 45, 20, 558, 654897, 1, 2235];

    charArr.map((num) => {
        console.log(num.toString().padStart(10, '0'));
    });

    charArr.map((num) => {
        console.log(num.toString().padEnd(10, '='));
    });

})();