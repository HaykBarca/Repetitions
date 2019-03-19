;(function() {
   "use strict";

   const obj = {
       prop: 1
   }

   //Cannot rewrite or delete prop2 wich is setting
   Object.defineProperty(obj, 'prop2', {
       enumerable: false,
       configurable: false,
       writable: false,
       value: 2
   });

   console.log(obj);

   //Getting property description, aka enumerable, configurable
   const descriptor = Object.getOwnPropertyDescriptor(obj, 'prop2');

   console.log(descriptor);
})();