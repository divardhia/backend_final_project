import express from "express";
import { createUser, deleteUser, getAllUser, getUserById, updateUser, login } from "../controllers/user.js";

const router = express.Router();

router.get('/', getAllUser);
router.get('/:id', getUserById);
router.post('/login', login);
router.post('/', createUser);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;