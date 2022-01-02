import Vocab from "../models/vocabModel.js";

export const getAllVocab = async (req, res) => {
    try {
        const vocab = await Vocab.findAll();
        res.json(vocab);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const getVocabById = async (req, res) => {
    try {
        const vocab = await Vocab.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(vocab[0]);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const getVocabByKategori = async (req, res) => {
    try {
        const vocab = await Vocab.findAll({
            where: {
                kategori: req.params.kategori
            }
        });
        res.json(vocab[0]);
    } catch (error) {
        res.json({ message: error.message });
    }
}


export const createVocab = async (req, res) => {
    try {
        await Vocab.create(req.body);
        res.json({"message": "Vocab Created"});
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const updateVocab = async (req, res) => {
    try {
        await Vocab.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({"message": "Vocab Updated"});
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const deleteVocab = async (req, res) => {
    try {
        await Vocab.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({"message": "Vocab Deleted"});
    } catch (error) {
        res.json({ message: error.message });
    }
}