const router = require('express').Router();
const {
	createUser,
	getAllUsers
} = require('../../../controllers/userController');
// /api/users
router.route('/')
	.get(getAllUsers)
	.post(createUser);
// /api/users/:userId
// router.route('/:userId')
// 	.delete(deleteUserById)
// 	.get(getUserById)
// 	.put(updateUserById)
module.exports = router;
