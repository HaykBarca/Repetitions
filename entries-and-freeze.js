;(function() {
   "use strict";

   const obj = {
       prop: 1,
       prop1: 2,
       prop3: 'demo',
       prop4: {
           prop5: [1, 2, 3]
       }
   }

   console.log(Object.entries(obj));

   const obj1 = {
       prop1: 1,
       prop2: {
           prop3: 2
       }
   }

   const obj2 = Object.freeze(obj1);

   console.log(obj2);

   obj2.prop1 = 12;
})();