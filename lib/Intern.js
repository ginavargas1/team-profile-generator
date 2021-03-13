const Employee = require("./Employee")

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school;

    }

    getSchool(){
        return this.school
    }

    getRole () {
        return 'Intern';
    }

}

const intern = new Intern('James', '2', 'j@j.com', 'UCLA')
console.table(intern)

module.exports = Intern;