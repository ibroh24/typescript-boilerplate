"use strict";
// type guard - this is a way to check if a type is a certain type or not
// regular way to check if a type is a certain type
function addNum(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
// other ways
function userProfile(user) {
    console.log(user.name);
    if ('permission' in user)
        console.log(user.permission);
    if ('employmentDate' in user)
        console.log(user.employmentDate);
}
userProfile({
    name: 'Alex',
    permission: ['server-admin', 'network-admin'],
    employmentDate: new Date
});
userProfile({
    name: 'John',
    employmentDate: new Date
});
userProfile({
    name: 'Doe',
    permission: ['super-admin'],
});
// can also be use with class
class Car {
    drive() {
        console.log('driving...');
    }
}
class Truck {
    drive() {
        console.log('driving...');
    }
    loadTruck(value) {
        console.log('loading truck with ' + value);
    }
}
function useVehicle(vehicle) {
    console.log(vehicle.drive());
    // for function check - but not really elligant
    if ('loadTruck' in vehicle)
        console.log(vehicle.loadTruck(200));
    if (vehicle instanceof Truck)
        console.log(vehicle.loadTruck(200));
}
const v1 = new Car();
const v2 = new Truck();
useVehicle(v2);
function getAnimalSpeed(animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log('Moving speed at: ' + speed);
    if (animal.type == 'bird')
        console.log(animal.flyingSpeed);
    if (animal.type == 'horse')
        console.log(animal.runningSpeed);
}
