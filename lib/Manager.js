const Employee = require("./Employee")

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email, "Manager")
        this.officeNumber = officeNumber;

    }

    getOfficeNumber(){
        return this.officeNumber;
    }

    getRole () {
        return 'Manager';
    }

}

// const manager = new Manager('Taylor', '1', 't@t.com', 555555555)
// console.log(manager.getRole())

module.exports = Manager