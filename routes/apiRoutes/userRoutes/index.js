const router = require('express').Router();
const {
	createUser,
	getAllUsers,
	getUserById,
	login,
} = require('../../../controllers/userController');
// /api/users
router.route('/')
	.get(getAllUsers)
	.post(createUser);


router.post('/login', login);

router.route('/:userId')
	.get(getUserById);
// /api/users/:userId
// router.route('/:userId')
// 	.delete(deleteUserById)
// 	.get(getUserById)
// 	.put(updateUserById)
module.exports = router;
