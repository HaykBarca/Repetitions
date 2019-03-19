;(function(){
    "use strict";

    let arrOld = [123, 5451, 1518, 2201, 549, 112357, 2058, 22085, 202, 21858, 3545, 215, 1522];

    function secondMax(arrOld) {
        let arrNew = [];

        for (let i = 0; i < arrOld.length; i++) {
            if((arrOld[i] > arrOld[i + 1] || arrOld[i] > arrOld[i - 1]) && arrOld[i] !== Math.max(...arrOld)) {
                arrNew.push(arrOld[i]);
            }
        }
        return Math.max(...arrNew);
    }

    if (arrOld.length > 1) {
        console.log('Second largest number is ', secondMax(arrOld));
    } else {
        console.log('Array length is smaller than 2')
    }
})();