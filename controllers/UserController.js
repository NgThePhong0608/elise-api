import User from "../models/User.js";

export async function getAllUsers(req, res) {
    try {
        const users = await User.findById({
            _id: "59b99db7cfa9a34dcd7885bd",
        }).exec();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export async function createUser(req, res) {
    try {
        console.log(req.body);
        const user = new User(req.body);
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
