"use strict";
let user;
user = {
    name: 'Max',
    age: 30,
    greet(phrase) {
        console.log(phrase + ' ' + this.name);
    }
};
user.greet('Hello');
