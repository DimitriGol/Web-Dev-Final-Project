const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:')

class Employee extends Model {
	getFullname() {
		return [this.firstName, this.lastName].join(' ');
	}
	getDepartment() {
		return this.department;
	}
	getTasks() {

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
	getDiscription() {
		return this.description;
	}
	getPriority() {
		return this.priority;
	}
	getCompletion() {
		return this.completion;
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

const Johnny = Employee.build({ firstName: "Johnny", lastName: "Applesseed", department: "Tech" });
console.log(Johnny.getFullname());
console.log(Johnny.getDepartment());

const Task1 = Task.build({user: Johnny, description: "none", priority: 1, completion: 'Not Started'});
console.log(Task1.getUser());
console.log(Task1.getDiscription());
console.log(Task1.getPriority());
console.log(Task1.getCompletion());