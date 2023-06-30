import { createUser, getUser, updateUser, getUserById, getUsers, loginUser, getAuthData} from '../Controllers/UserControllers.js';
import express from 'express';

const router = express.Router()

router.get('/', getUser);
router.get('/', getUsers);
router.get('/:id', getUserById);
router.post('/', createUser);
router.post('/login', loginUser);
router.post('/auth', getAuthData);
router.put('/:id', updateUser);

export default router;