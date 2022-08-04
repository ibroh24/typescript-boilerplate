"use strict";
// then use in a function
function usingTypeAlias(transaction, student) {
    if (transaction == 'buy') {
        return `${student} payment for ${transaction} is confirmed`;
    }
    return `${student} ${transaction} is confirmed`;
}
