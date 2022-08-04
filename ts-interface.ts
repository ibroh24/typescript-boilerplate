// interface is a way structuring object, but it doesnt need value in it.
// interface dont accept private, public and protected but can accept readonly
interface Person{
    name: string;
    age: number;

    greet(phrase:string): void
}

let user: Person;
user = {
    name: 'Max',
    age: 30,
    greet(phrase:string){
        console.log(phrase + ' ' + this.name);
    }
}

user.greet('Hello');
