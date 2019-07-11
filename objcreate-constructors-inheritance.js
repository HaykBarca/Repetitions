(function() {
    "use strict"

    // Inherit with Object.create
    function inherit(p) {
        if (p == null) throw TypeError();
        if (Object.create) {
            return Object.create(p);
        }
        const t = typeof(p);

        if (t !== 'object' && t !== 'function') throw TypeError();
        function f() {};
        f.prototype = p;
        return new f();
    }

    function range(from, to) {
        const r = inherit(range.methods);

        r.from = from;
        r.to = to;

        return r;
    }

    range.methods = {
        includes: function(x) { return this.from <= x && x <= this.to },
        foreach: function(f) {
            for(var x = Math.ceil(this.from); x <= this.to; x++) f(x);
        },
        toString: function() { return "(" + this.from + "..." + this.to + ")"; }
    };

    var r = range(1, 3);
    console.group('Inheritance with %cObject.create', 'color: red;');
        console.log(r.includes(2));
        r.foreach(console.log);
        console.log(r.toString());
    console.groupEnd('Inheritance with %cObject.create', 'color: red;');
    // End of Inherit with Object.create

    //Inherit with new Func()
    function Range(from, to) {
        this.from = from;
        this.to = to;
    }

    Range.prototype = {
        includes: function(x) { return this.from <= x && x <= this.to },
        foreach: function(f) {
            for(var x = Math.ceil(this.from); x <= this.to; x++) f(x);
        },
        toString: function() { return "(" + this.from + "..." + this.to + ")"; }
    }

    var b = new Range(4, 8);
    console.group('Inheritance with %cnew Func()', 'color: red;');
        console.log(b.includes(2));
        b.foreach(console.log);
        console.log(b.toString());
    console.groupEnd('Inheritance with %cnew Func()', 'color: red;');
    //End of Inherit with new Func()

})();