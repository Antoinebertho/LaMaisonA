import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import config from 'config';

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('x-auth-token');
    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }
    try {
        const decoded = jwt.verify(token, config.ACCESS_TOKEN);
        req.user = decoded.user;
        next();
    } catch (err) {
        res.status(401).json({ msg: 'Token is not valid' });
    }
}
