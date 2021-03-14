class Employee {
    constructor(name, id, email, role, addEmployee){

    this.name = name;
    this.id = id;
    this.email = email;
    this.role = "Employee";
    this.addEmployee = addEmployee;

    }

    getName(){
        return this.name;
    }

    getID (){
        return this.id;
    }

    getEmail (){
        return this.email;
    }

    getRole (){
        return this.role;
    }

    getAddEmployee (){
        return this.addEmployee;
    }

}


module.exports = Employee



