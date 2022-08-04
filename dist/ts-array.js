"use strict";
// array: this contain array of only string
let scholar = [
    'school',
    'hostel',
    'garden'
];
// array with numbers
let classes = [
    23, 43, 56, 65, 12
];
// and this array contains any data
let rawFact = [
    'yemisi',
    'ss2',
    24,
    'boladale'
];
// spread with destructuring
const [username, userClass, ...others] = rawFact;
