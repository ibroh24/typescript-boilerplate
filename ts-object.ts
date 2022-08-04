// ts - object
const persons = {
    firstname: 'Max',
    age: 30
}

console.log(persons.firstname);

const schoolData:  {
    school: string;
    class: string
}={
    school : "Solagbemi",
    class: "SS2",
}


// destructuring
const {firstname, age, ...rest} = persons;

