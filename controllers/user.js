import User from "../models/userModels.js";

export const getAllUser = async (req, res) => {
    try {
        const user = await User.findAll();
        res.json(user);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const getUserById = async (req, res) => {
    try {
        const user = await User.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(user[0]);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const login = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    try {
        const user = await User.findOne({
            where: {
                email: email,
                password: password
            }
        });
        if (user) {
            return res.json(user);
        } else {
            return res.json([{
                success: false,
                message: 'Item not found!'
            }])
        }
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const createUser = async (req, res) => {
    try {
        await User.create(req.body);
        res.json({"message": "User Created"});
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const updateUser = async (req, res) => {
    try {
        await User.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({"message": "User Updated"});
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const deleteUser = async (req, res) => {
    try {
        await User.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({"message": "User Deleted"});
    } catch (error) {
        res.json({ message: error.message });
    }
}