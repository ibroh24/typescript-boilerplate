// you can use type custom alias to make it more readable for both parameter (literal and union)
type Trade = 'buy' | 'sell';
type MatricType = string | number;

// then use in a function
function usingTypeAlias(transaction: Trade, student: MatricType){
    if(transaction == 'buy'){
        return `${student} payment for ${transaction} is confirmed`;
    }
    return `${student} ${transaction} is confirmed`;
}
