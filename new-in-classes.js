(function() {
    //Old syntax where '_count' is private property
    class IncreasingCounter {
        constructor() {
            this._count = 0;
        }

        get value() {
            console.log('Getting the current value.');
            return this._count;
        }

        increment() {
            this._count += 1;
        }
    }

    const counter = new IncreasingCounter();
    console.log(counter.value);
    counter.increment();
    console.log(counter.value);

    //New syntax where '#count' is private property
    class IncreasingCounterNew {
        #count = 0;

        get value() {
            console.log('Getting the current value.');
            return this.#count;
        }

        increment() {
            this.#count += 1;
        }
    }

    const counterNew = new IncreasingCounterNew();
    console.log(counterNew.value);
    counterNew.increment();
    console.log(counterNew.value);

    //Old syntax inheritance with super()
    class Animal {
        constructor(name) {
            this.name = name;
        }
    }

    class Cat extends Animal {
        constructor(name) {
            super(name);
            this.likesBaths = false;
        }

        meow() {
            console.log('Meow!');
        }
    }

    const Alex = new Cat('Boris');
    Alex.meow();

    //New syntax inheritance without super()
    class AnimalNew {
        constructor(name) {
            this.name = name;
        }
    }

    class CatNew extends AnimalNew {
        likesBaths = false;
        meow() {
            console.log('Meow!');
        }
    }

    const AlexNew = new Cat('Bor');
    AlexNew.meow();
})()