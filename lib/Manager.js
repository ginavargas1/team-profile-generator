const Employee = require("./Employee")

class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        super(name, id, email)
        this.officeNum = officeNum;

    }

    getOfficeNum(){
        return this.officeNum
    }

    getRole () {
        return 'Manager';
    }

}

const manager = new Manager('Taylor', '1', 't@t.com', 555555555)
console.log(manager.getRole())

module.exports = Manager