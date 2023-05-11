//pretend this is the server

class Employee {
    constructor(firstName, lastName, department) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.department = department;
    }
}

class Task{
    constructor(user, description, priority, completion){
        this.user = user;
        this.description = description;
        this.priority = priority;
        this.completion = completion;
    }
}

const list1 = {
    employees: [],
    tasks: [],
    addEmployee: function(firstName, lastName, department) {
        this.employees.push(new Employee(firstName, lastName, department));
    },
    deleteEmployee: function(x){
        this.employees.splice(x,1)
    },
    addTask: function(user, description, priority, completion) {
        this.tasks.push(new Task(user, description, priority, completion));
    },
    deleteTask: function(x){
        this.tasks.splice(x,1)
    },
}

export default list1;