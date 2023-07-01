import { createUser, updateUser, getUsers, loginUser, getAuthData} from '../Controllers/UserControllers.js';
import express from 'express';

const router = express.Router()

router.get('/', getUsers);
router.post('/', createUser);
router.post('/login', loginUser);
router.post('/auth', getAuthData);
router.put('/:id', updateUser);

export default router;