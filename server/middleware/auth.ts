import jwt from 'jsonwebtoken';
import { Response, NextFunction } from 'express';
import config from 'config';
import User from '../models/userModel';
import {AuthenticatedRequest} from '../interfaces/authInterface';


export const auth = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  try {
    const token = req.header('x-auth-token');
    if (!token) {
      return res.status(401).json({ msg: 'No token, authorization denied' });
    }
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET ?? "");
    req.user = await User.findById(decoded);
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
}

  export const isAdmin = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    try {
      const token = req.header('x-auth-token');
      if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });
      const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET ?? "");
      const user = await User.findById(decoded);
      if (user == null || !user.isAdmin ) return res.status(401).json({ msg: 'User not found or is not an admin' });
      req.user = user;
      next();
    } catch (err) {
      res.status(401).json({ msg: 'Token is not valid' });
    }
  }

  export const verifyToken = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    try {
      const token = req.header('x-auth-token');
      if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });
      const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET ?? "");
      req.user = await User.findById(decoded);
      next();
    } catch (err) {
      res.status(401).json({ msg: 'Token is not valid' });
    }
  }