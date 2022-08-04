"use strict";
//ts - enum
var Roles;
(function (Roles) {
    Roles[Roles["ADMIN"] = 0] = "ADMIN";
    Roles[Roles["READ_ONLY"] = 1] = "READ_ONLY";
    Roles[Roles["AUTHOR"] = 2] = "AUTHOR";
})(Roles || (Roles = {}));
;
const personalData = {
    name: 'Max',
    age: 30,
    role: Roles.ADMIN
};
console.log(personalData.role);
