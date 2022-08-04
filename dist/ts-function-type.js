"use strict";
// ts - function can return value of string, number and boolean or return nothing known as void
// ie this function return union data type (string or number)
function functionReturnType(num1, num2) {
    if (typeof num1 == 'number' && typeof num2 == 'number') {
        return num1 + num2;
    }
    return `${num1}+${num2}`;
}
// while this function return nothing ie void
function returnVoid(num1) {
    // make value upper case
    if (typeof num1 == 'string') {
        num1.toUpperCase();
    }
    else if (typeof num1 == 'number') {
        Math.sqrt(num1);
    }
}
// the above function type is void and also known as undefined, you can add undefined as return type but must have return keyword
function addingUndefinedReturn(xyz) {
    if (typeof xyz == 'string') {
        xyz.toUpperCase();
    }
    else if (typeof xyz == 'number') {
        Math.sqrt(xyz);
    }
    return;
}
function xyz(xyz) {
    return xyz;
}
// we also have a type of function, which means a variable can hold a function type
let fnHolder;
// but can make a function type as below: (a fn that accept parameter type and return type)
let fnHolder2;
fnHolder = addingUndefinedReturn;
fnHolder2 = xyz;
fnHolder(22);
// a function can also be a callback return type
function tryAndHandle(num1, num2, callback) {
    let result = num1 + num2;
    callback(result);
}
tryAndHandle(22, 33, (result) => {
    console.log(result);
});
// another data types of ts
let cc = 'hello';
let dd = 22;
// data type that 'never' returns anything: just like void
function neverReturn() {
    throw new Error('error');
}
