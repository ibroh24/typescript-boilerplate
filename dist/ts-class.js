"use strict";
class Company {
    constructor(company, branch, department, totalStaff) {
        this.company = company;
        this.branch = branch;
        this.department = department;
        this.totalStaff = totalStaff;
        // but instead of setting properties twice (ie set in class and constructor), you can just set it in constructor only with their access modifiers (private/public)
        // company: string;
        // branch: string;
        // department: string;
        // staff: number;
        /* private will only be access within this class and no access from classes that inherit this class */
        this.employees = [];
        /* protected will allow you to access properties and methods of extended class */
        this.employers = [];
        // we can also use readonly to the modifier
        this.country = 'Nigeria';
        this.company = company;
        this.branch = branch;
        this.department = department;
        this.totalStaff = totalStaff;
    }
    describe() {
        console.log('Department: ' + this.department);
    }
    addEmployees(employee) {
        this.employees.push(employee);
    }
    getEmployees() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
class Division extends Company {
    constructor(state, region) {
        super('Majadtek', state, 'IT', 12);
        this.state = state;
        this.region = region;
        this.state = state;
        this.region = region;
    }
    getDesc() {
        this.describe();
    }
}
const company = new Company('Majadtek', 'Egbeda', 'Technology', 12);
const division = new Division('Lagos', 'south west');
division.getDesc();
company.addEmployees('Uthman');
// company.employees.push('bobo');
company.addEmployees('Ibrahim');
company.addEmployees('Quadri');
company.getEmployees();
