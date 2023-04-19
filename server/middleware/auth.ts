import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import config from 'config';
import User from '../models/userModel';

export const auth = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.header('x-auth-token');
        if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });
        const decoded = jwt.verify(token, config.ACCESS_TOKEN_SECRET);
        req.user = await User.findById(decoded.id);
        next();
}
    catch (err) {
        res.status(401).json({ msg: 'Token is not valid' });
    }
}

export const isAdmin = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.header('x-auth-token');
        if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });
        const decoded = jwt.verify(token, config.ACCESS_TOKEN_SECRET);
        req.user = await User.findById(decoded.id);
        next();
    }
    catch (err) {
        res.status(401).json({ msg: 'Token is not valid' });
    }
}

export const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.header('x-auth-token');
        if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });
        const decoded = jwt.verify(token, config.ACCESS_TOKEN_SECRET);
        req.user = await User.findById(decoded.id);
        next();
    }
    catch (err) {
        res.status(401).json({ msg: 'Token is not valid' });
    }
}