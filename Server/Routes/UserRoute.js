import { createUser, updateUser, getUsers, loginUser, getAuthData, forgetPassword, resetPassword, updatedPassword} from '../Controllers/UserControllers.js';
import express from 'express';

const router = express.Router()

router.get('/', getUsers);
router.post('/', createUser);
router.post('/login', loginUser);
router.post('/auth', getAuthData);
router.post('/forget-password', forgetPassword);
router.get('/reset-password/:id/:token', resetPassword);
router.post('/reset-password/:id/:token', updatedPassword);
router.put('/:id', updateUser);
export default router;