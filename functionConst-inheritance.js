;(function() {

   "use strict";
   function Person(firstname, lastname) {
       this.firstname = firstname;
       this.lastname = lastname;
   }

   Person.prototype.fullname = function() {
       return `${this.firstname} ${this.lastname}`;
   }

   function Professional(honorific, firstname, lastname) {
       Person.call(this, firstname, lastname);
       this.honorific = honorific;
   }

   Professional.prototype = Object.create(Person.prototype);

   Professional.prototype.profFullname = function() {
       return `${this.honorific} ${this.firstname} ${this.lastname}`;
   }

   const prof = new Professional('Dr.', 'Hayk', 'Ghonakhchyan');
   console.log(prof.profFullname());
   console.log(prof.fullname());
})();