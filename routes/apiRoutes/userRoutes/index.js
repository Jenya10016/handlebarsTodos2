const router = require('express').Router();
const {
	createUser,
	getUserById,
	login,
	signupHandler,
} = require('../../../controllers/userController');
// /api/users
router.route('/')
	.post(createUser);

router.post('/signup', signupHandler);
router.post('/login', login);

router.route('/:userId')
	.get(getUserById);
// /api/users/:userId
// router.route('/:userId')
// 	.delete(deleteUserById)
// 	.get(getUserById)
// 	.put(updateUserById)
module.exports = router;
