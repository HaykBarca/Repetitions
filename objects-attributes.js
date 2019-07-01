(function() {
    "use strict"

    //Objects attribute "prototype"
    const p = {
        a: 1,
    };

    const o = Object.create(p);

    console.group('Objects attribute %c"prototype"', 'color: red;');
        console.log('p.isPrototypeOf(o): ', p.isPrototypeOf(o));
        console.log('Object.prorotype.isPrototypeOf(p): ', Object.prototype.isPrototypeOf(p));
    console.groupEnd('Objects attribute %c"prototype"', 'color: red;');

    //Objects attribute "class"
    function classof(o) {
        if (o === null) return "Null";
        if (o === undefined) return "Undefined";
        return Object.prototype.toString.call(o).slice(8,-1);
    }

    console.group('Objects attribute %c"class"', 'color: red');
        console.log('classof(null): ', classof(null));
        console.log('classof(1): ', classof(1));
        console.log('classof({}): ', classof({}));
        console.log('classof(new Date()): ', classof(new Date()));
    console.groupEnd('Objects attribute %c"class"', 'color: red');

    //Objects attribute "extensible"
    const k = Object.seal(Object.create(Object.freeze({x:1}),
                        {y: {value: 2, writable: false}}));

    console.group('Objects attribute %c"extensible"', 'color: red');
        console.log('Object.isExtensible(): ', Object.isExtensible(k));
        console.log('Object.isSealed(): ', Object.isSealed(k));
        console.log('Object.isFrozen(): ', Object.isFrozen(k));
    console.groupEnd('Objects attribute %c"extensible"', 'color: red');

})();
