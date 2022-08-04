
// array: this contain array of only string
let scholar: string[] = [
    'school',
    'hostel',
    'garden'
];

// array with numbers
let classes: number[] = [
    23, 43, 56, 65, 12
];

// and this array contains any data
let rawFact: any[] = [
    'yemisi',
    'ss2',
    24,
    'boladale'
];
// spread with destructuring
const [username, userClass, ...others] = rawFact;