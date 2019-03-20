(function() {

    "use strict";
    
    //Rest and Spread properties for objects

    //Rest
    let { firstname, lastname, ...props } = {
        firstname: 'Hayk',
        lastname: 'Gh',
        age: 25,
        married: false,
        country: {
            code: 'am',
            city: 'Ashtarak'
        }
    }

    console.log(firstname);
    console.log(lastname);
    console.log(props);

    //Spread
    let animal = { type: 'human', legs: 2 };
    let person = { name: 'Hayk', pass: { num: NaN, present: true } };

    let info = { ...animal, ...person };

    console.log(info);

})();