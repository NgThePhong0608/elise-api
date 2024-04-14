import User, { hashPassword, comparePasswords } from "../models/User.js";

export async function getAllUsers(req, res) {
    try {
        const users = await User.find().exec();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export async function register(req, res) {
    try {
        let { name, email, password } = req.body;

        const checkEmail = (await User.findOne({ email }).exec())
            ? true
            : false;
        if (checkEmail) {
            return res.status(400).json({ message: "Email already exists" });
        }

        password = await hashPassword(password);
        const user = new User({ name, email, password });
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export async function login(req, res) {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email }).exec();
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }
        const checkPassword = await comparePasswords(password, user.password);
        if (!checkPassword) {
            return res.status(400).json({ message: "Invalid password" });
        }
        res.status(200).json({ message: "Login successful" });
    } catch (error) {}
}
