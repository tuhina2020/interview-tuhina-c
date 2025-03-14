/*
{
    "firstName": "John",
    "lastName": "Doe",
    "email": "johndoe@gmail.com",
    "dateOfBirth": "31-12-1990",
    "employeeId": "23434",
    "createdAt",
    "updatedAt",
    "createdBy": "565675"
}
*/

const fs = require('node:fs');

class Employee {

    constructor() {
        this.employees = JSON.parse(fs.readFileSync('./all_employees.json'));
    }

    createEmployee(data, headers, creatorId) {
        var employeeId = this.employees.length + 1;

        var entry = { ...data,
            employeeId,
            "createdAt": new Date(),
            "updatedAt": new Date(),
            "createdBy": creatorId
        }

        this.employees.push(entry);
        console.log(this.employees);
        this.writeToFile(JSON.stringify(this.employees));
        return entry;
    }

    getEmployee(employeeId) {
        console.log(this.employees);
        var emp_match = this.employees.filter(employee => parseInt(employee.employeeId) === parseInt(employeeId));
        if (emp_match && emp_match.length > 0) {
            return emp_match[0]
        } else {
            return {}
        }

    }

    writeToFile(data) {
        try {
            fs.writeFileSync('./all_employees.json', data);
        } catch (err) {
            console.error(err);
        }
    }

}

module.exports = { Employee };