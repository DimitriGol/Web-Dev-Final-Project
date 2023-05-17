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
        for (let i=0; i<this.tasks.length; i++){
            if (this.tasks[i].user === x){
                this.tasks.splice(i,1)
            }
        }
    },

    getEmployeeFirstName: function(x){
        return this.employees[x-1]?.firstName;
    },
    getEmployeeLastName: function(x){
        return this.employees[x-1]?.lastName;
    },

    getEmployeeDepartment: function(x){
        return this.employees[x-1]?.department
    },

    addTask: function(user, description, priority, completion) {
        this.tasks.push(new Task(user, description, priority, completion));
    },
    deleteTask: function(x){
        this.tasks.splice(x,1)
    },
    getTaskUser: function(x){
        return this.tasks[x-1]?.user;
    }
}

export default list1;