import { createUser, getUser, updateUser, getUserById, getAllUsers} from '../Controllers/UserControllers.js';
import express from 'express';

const router = express.Router()

router.get('/', getUser);
router.get('/all', getAllUsers);
router.get('/:id', getUserById);
router.post('/', createUser);
router.put('/:id', updateUser);

export default router;