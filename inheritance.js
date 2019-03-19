;(function() {
    "use strict";

    //Deep Inheritance with function constructors
    function deepFunctions () {

        function Person (firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
        }

        Person.prototype.greet = function () {
            console.log(`Hello ${this.firstname} ${this.lastname}`);
        }

        function Hayk (middlename) {
            Person.call(this, 'Hayk', 'Ghonakhchyan')
            this.middlename = middlename;
        }

        Hayk.prototype.greetNew = function () {
            console.log(`Azyiz ${this.firstname} ${this.lastname} ${this.middlename} jan, privet kyanq!!!`);
        }

        for (let unit in Person.prototype) {
            Hayk.prototype[unit] = Person.prototype[unit];
        }

        var newHayk = new Hayk('Metsn');

        console.log(newHayk);
        newHayk.greet();
        newHayk.greetNew();

    }


    //Deep Inheritance with classes
    function deepClasses () {

        class Person {
            constructor (firstname, lastname) {
                this.firstname = firstname;
                this.lastname = lastname;
            }

            greet () {
                console.log(`Hello ${this.firstname} ${this.lastname} jan!!!`);
            }
        }


        class Hayk extends Person {
            constructor (middlename) {
                super('Hayk', 'Ghonakhchyan');
                this.middlename = middlename;
            }

            greetNew () {
                console.log(`Aziz jan ${this.firstname} ${this.middlename} privet!!!`);
            }
        }

        var newHayk = new Hayk('Metsn');

        console.log(newHayk);
        newHayk.greetNew();
        newHayk.greet();

    }


    deepFunctions();
    deepClasses();
})();