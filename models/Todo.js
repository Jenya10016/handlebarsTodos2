const { Model, DataTypes, UUIDV4 } = require('sequelize');
const sequelize = require('../config');
class Todo extends Model {}
Todo.init(
	{
		id: {
			type: DataTypes.UUID,
			defaultValue: UUIDV4,
			primaryKey: true,
		},
		task: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		completed: {
			type: DataTypes.BOOLEAN,
			defaultValue: false,
		},
		userId: {
			type: DataTypes.UUID,
			references: {
				model: 'user',
				key: 'id',
			}
		}
	},
	{
		sequelize,
		timestamps: false,
		freezeTableName: true,
		modelName: 'todo'
	}
);
module.exports = Todo;
/*
* Create a file called Todo.js in models then create a model called "todo"
* it should have 3 properties
*   1st:  task , should be a text and cannot be null
*   2nd:  completed, boolean, defaults to false
*   3rd: userId: reference the user model
*  export it to be used in other files
*  Create the following connection in models/index.js
* 		a User has many todos
*     a todo belongsTo a User
* */
