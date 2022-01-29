const {
	User
} = require('../models');
module.exports = {
	createUser: async (req, res) => {
		const { username, email, password } = req.body;
		if (!username || !email || !password ) {
			return res.status(400).json({ error: 'You must provide a username, email, and password'});
		}
		try {
			const user = await User.create({
				username,
				email,
				password,
			});
			res.json(user);
		} catch (e) {
			res.json(e);
		}
	},
//	getting users
	getAllUsers: async (req, res) => {
		try {
			const usersData = await User.findAll({});

			const users = usersData.map(user => user.get({ plain: true }));

			console.log(users);
			res.render('allUsers', {
				users,
				favoriteFood: 'Ice cream sandwich',
			});
		} catch (e) {
			res.json(e);
		}
	},
}
