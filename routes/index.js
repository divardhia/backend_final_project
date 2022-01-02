import express from "express";
import { createUser, deleteUser, getAllUser, getUserById, updateUser, login } from "../controllers/user.js";
import { createVocab, deleteVocab, getAllVocab, getVocabById, getVocabByKategori, updateVocab } from "../controllers/vocab.js";


const router = express.Router();

router.get('/', getAllUser);
router.get('/:id', getUserById);
router.post('/login', login);
router.post('/', createUser);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);


router.get('/vocab', getAllVocab);
router.get('/vocab/:id', getVocabById);
router.get('/vocab/:kategori', getVocabByKategori);
router.post('/vocab/create/', createVocab);
router.patch('/vocab/update/:id', updateVocab);
router.delete('/vocab/delete/:id', deleteVocab);

export default router;