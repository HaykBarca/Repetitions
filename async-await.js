;(function() {
    "use strict";

    async function collab() {
        let oldPromise = new Promise((resolve, reject) => {
            setTimeout(function() {
                resolve('Passed 2 seconds');
            }, 2000);
        });

        let answer = await oldPromise;
        console.log(answer);
        console.log('This should go after await');
    }

    collab();
})();