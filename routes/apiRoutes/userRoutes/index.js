const router = require('express').Router();
const {
	createUser,
	getAllUsers,
	getUserById,
	getAllUsersPt2
} = require('../../../controllers/userController');
// /api/users
router.route('/')
	.get(getAllUsers)
	.post(createUser);

router.get('/part2', getAllUsersPt2)

router.route('/:userId')
	.get(getUserById);
// /api/users/:userId
// router.route('/:userId')
// 	.delete(deleteUserById)
// 	.get(getUserById)
// 	.put(updateUserById)
module.exports = router;
