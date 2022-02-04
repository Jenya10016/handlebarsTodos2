const { Todo } = require('../models');
module.exports = {
	getAllTodos: async (req, res) => {
		if (!req.session.loggedIn) {
			return res.redirect('/login');
		}
		try {
			const userTodosData = await Todo.findAll({
				where: {
					userId: req.session.user.id,
				}
			});
			res.render('todos', {
				userTodos: userTodosData.map(userTodo => userTodo.get({ plain: true })),
			});
		} catch (e) {
			res.json(e);
		}
	},
}
