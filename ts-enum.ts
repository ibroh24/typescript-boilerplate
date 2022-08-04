//ts - enum
enum Roles {
    ADMIN, 
    READ_ONLY, 
    AUTHOR
};
const personalData = {
    name: 'Max',
    age: 30,
    role: Roles.ADMIN
}
console.log(personalData.role);
