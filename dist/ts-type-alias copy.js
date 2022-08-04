"use strict";
// then use in a function
function usingTypeAlias(transaction, student) {
    if (transaction == 'buy') {
        return `${student} payment for ${transaction} is confirmed`;
    }
    return `${student} ${transaction} is confirmed`;
}
// type guard - this is a way to check if a type is a certain type or not
// regular way to check if a type is a certain type
function addNum(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
