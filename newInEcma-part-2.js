(function() {

    "use strict";
    
    //Promises vs async/await
    function getUser(userId) {
        return new Promise((resolve, reject) => {
           setTimeout(function() {
               if (userId === 1) {
                   resolve('Hayk');
               } else {
                   resolve(0);
               }
           }, 1000);
        });
    }

    function getBankBalance(user) {
        return new Promise((resolve, reject) => {
            setTimeout(function() {
                if (user === 'Hayk') {
                    resolve('$12000');
                } else {
                    reject('empty');
                }
            }, 1000);
        });
    }

    //Promise approach
    function getAmountPr(userId) {
        getUser(userId)
            .then(getBankBalance)
            .then(amount => {
               console.log(amount); 
            });
    }

    getAmountPr(1);

    //Async-Await approach
    async function getAmountAsy(userId) {
        const user = await getUser(userId);
        const amount = await getBankBalance(user);
        console.log(amount);
    }

    getAmountAsy(1);
})();