// ts - union: a way to accept 2 data-types for a parameter ie string and number or number and boolean
function addition(num1: string|number, num2: string| number){
    if(typeof num1 == 'number' && typeof num2 == 'number'){
        return num1 + num2;
    }
    return `${num1}+${num2}`;
}





