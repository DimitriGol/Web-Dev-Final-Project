const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:')

class Employee extends Model {
	getFullname() {
		return [this.firstName, this.lastName].join(' ');
	}
	getDepartment() {
		return this.department;
	}
	setFirstName(firstName)
	{
		this.firstName = firstName;
	}
	setLastName(lastName)
	{
		this.lastName = lastName;
	}
	setDepartment(department)
	{
		this.department = department;
	}
}
Employee.init({
	firstName: {
		type: DataTypes.STRING,
		allowNull: false
	},
	lastName: {
		type: DataTypes.STRING,
		allowNull: false
	},
	department: {
		type: DataTypes.STRING,
		allowNull: false
	}
	//	department:{
	//	type: DataTypes.ENUM,
	//	values: [],
	//	allowNull: false
	//	}
},
	{
		sequelize,
		modelName: 'Employee'
	});

class Task extends Model {
	getUser() {
		return this.user;
	}
	getDescription() {
		return this.description;
	}
	getPriority() {
		return this.priority;
	}
	getCompletion() {
		return this.completion;
	}
	setUser(user)
	{
		this.user = user;
	}
	setDescription(description)
	{
		this.description = description;
	}
	setPriority(priority)
	{
		this.priority = priority;
	}
	setCompletion(completion)
	{
		this.completion = completion;
	}
}

Task.init({
	user: {
		type: Employee,
		allowNull: false
	},
	description: {
		type: DataTypes.STRING,
	},
	priority: {
		type: DataTypes.INTEGER,
		allowNull: false
	},
	completion: {
		type: DataTypes.ENUM,
		values: ['Not Started', 'Completed'],
		allowNull: false
	}
},
	{
		sequelize,
		modelName: 'Task'
	});

class List extends Model {
	getEmployees()	{
		return this.Employees;
	}
	getEmployee(x)
	{
		return this.Employees[x];
	}
	getEmployeeWithTask(x)
	{
		return [this.Employees[x],this.getAssociatedTasks(x)];
	}
	getTasks() {
		return this.Tasks;
	}
	getTask(x)
	{
		return this.Tasks[x];
	}
	getTaskWithEmployee(x)
	{
		return [this.Tasks[x],this.Tasks[x].getUser()];
	}
	getAssociatedTasks(x)
	{
		const Associated_Tasks = [];
		for(let i = 0; i < this.Tasks.length; i++)
		{
			if(this.Tasks[i].getUser() == this.Employees[x])
				Associated_Tasks.push(this.Tasks[i]);
		}
		return Associated_Tasks;
	}
	editEmployee(x, firstName, lastName, department)
	{
		this.Employees[x].setFirstName(firstName);
		this.Employees[x].setLastName(lastName);
		this.Employees[x].setDepartment(department);
	}
	editTask(x, user, description, priority, completion)
	{
		this.Tasks[x].setUser(user);
		this.Tasks[x].setDescription(description);
		this.Tasks[x].setPriority(priority);
		this.Tasks[x].setCompletion(completion);
	}
	addEmployee(firstName, lastName, department)
	{
		this.Employees.push(Employee.build({ firstName: firstName, lastName: lastName, department: department }));
	}
	addTask(user, description, priority, completion)
	{
		this.Tasks.push(Task.build({ user: user, description: description, priority: priority, completion: completion }));
	}
	removeEmployee(x)
	{
		this.Employees.splice(x,1);
	}
	removeTask(x)
	{
		this.Tasks.splice(x,1);
	}
}
List.init({
	Employees: {
		type: DataTypes.ARRAY(Employee)
	},
	Tasks: {
		type: DataTypes.ARRAY(Task)
	}
},
	{
		sequelize,
		modelName: 'List'
	});

const List1 = List.build({Employees: [], Tasks: []});
List1.addEmployee("Johnny","Applesseed","Tech");
List1.addEmployee("Lebron","James","Sports");
List1.addTask(List1.getEmployee(0),"none",1,"Not Started");
List1.addTask(List1.getEmployee(1),"none",1,"Not Started");
List1.addTask(List1.getEmployee(1),"none",1,"Not Started");
console.log(List1.getEmployees());
console.log(List1.getTasks());
console.log(List1.getEmployeeWithTask(0));
console.log(List1.getTaskWithEmployee(1));
List1.editEmployee(1,"Lebron","James","Tech");
List1.editTask(1,List1.getEmployee(0),"none",1,"Started");
console.log(List1.getEmployee(1));
console.log(List1.getTask(1));
List1.removeEmployee(0);
List1.removeTask(0);
console.log(List1.getEmployees());
console.log(List1.getTasks());