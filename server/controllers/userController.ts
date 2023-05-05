import {Request, Response} from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/userModel";

// Create user
export const createUser = async(req: Request, res: Response)=> {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        const newUser = new User({
            name: req.body.name,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hashedPassword,
        });
        const user = await newUser.save();
        res.send(user);
    } catch (error) {
        console.error(error);
    }
}
 
// Get all users
export const getAllUsers = async(req: Request, res: Response) => {
    try {
        const users = await User.find();
        res.send(users);
    } catch (error) {
        console.error(error);
    }
}

// Login user
export const loginUser = async(req: Request, res: Response) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(400).send("User not found");
        }
        const validPassword = await bcrypt.compare(req.body.password, user.passwordHash);
        if (!validPassword) {
            return res.status(400).send("Invalid password");
        }
        const token = jwt.sign({ _id: user._id }, process.env.ACCESS_TOKEN_SECRET ?? "");
        res.header("x-auth-token", token).send(token);
    } catch (error) {
        console.error(error);
    }
}

// Logout user
export const logoutUser = async(req: Request, res: Response) => {
    try {
        res.send("User logged out");
    } catch (error) {
        console.error(error);
    }
}

// Get user
export const getUser = async(req: Request, res: Response) => {
    try {
        const user = await User.findById(req.params.id);
        !user && res.status(400).send("User not found");
        res.send(user);
    } catch (error) {
        console.error(error);
    }
}

// edit user
export const editUser = async(req: Request, res: Response) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        !user && res.status(400).send("User not found");
        res.send(user);
    } catch (error) {
        console.error(error);
    }
}

// delete user
export const deleteUser = async(req: Request, res: Response) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        !user && res.status(400).send("User not found");
        res.send(user);
    } catch (error) {
        console.error(error);
    }
}