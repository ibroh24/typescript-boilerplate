// ts - function can return value of string, number and boolean or return nothing known as void
// ie this function return union data type (string or number)
function functionReturnType(num1: string|number, num2: string| number): string | number{
    if(typeof num1 == 'number' && typeof num2 == 'number'){
        return num1 + num2;
    }
    return `${num1}+${num2}`;
}

// while this function return nothing ie void

function returnVoid(num1: string|number): void{
    // make value upper case
    if(typeof num1 == 'string'){
        num1.toUpperCase();
    }else if(typeof num1 == 'number'){
        Math.sqrt(num1)
    }
}

// the above function type is void and also known as undefined, you can add undefined as return type but must have return keyword
function addingUndefinedReturn(xyz: number|string): undefined{
    if(typeof xyz == 'string'){
        xyz.toUpperCase();
    }else if(typeof xyz == 'number'){
        Math.sqrt(xyz)
    }
    return;
}

function xyz(xyz: number): number{
    return xyz;
}

// we also have a type of function, which means a variable can hold a function type

let fnHolder: Function;

// but can make a function type as below: (a fn that accept parameter type and return type)
let fnHolder2: (num1: number) => number;

fnHolder = addingUndefinedReturn;
fnHolder2 = xyz;

fnHolder(22);

// a function can also be a callback return type
function tryAndHandle(num1: number, num2: number, callback: (result: number) => void): void{
    let result = num1 + num2;
    callback(result);
}

tryAndHandle(22, 33, (result) => {
    console.log(result);
});

// another data types of ts
let cc: unknown = 'hello';
let dd: unknown = 22;

// data type that 'never' returns anything: just like void
function neverReturn(): never{
    throw new Error('error');
}