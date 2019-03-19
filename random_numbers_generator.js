;(function() {
    "use strict";

    function getRandomIntInclusive(min, max, count) {
        min = Math.ceil(min);
        max = Math.floor(max);
        var finalNumber = '';
        for (let i = 0; i < count; i++) {
            finalNumber += Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
            finalNumber += ' ';
        }
        return finalNumber;
    }

    console.log(getRandomIntInclusive(20, 68, 8));
})();