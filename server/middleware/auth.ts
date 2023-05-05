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
    const decoded = jwt.verify(token, config.ACCESS_TOKEN_SECRET);
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
      const decoded = jwt.verify(token, config.ACCESS_TOKEN_SECRET);
      req.user = await User.findById(decoded);
      next();
    } catch (err) {
      res.status(401).json({ msg: 'Token is not valid' });
    }
  }

  export const verifyToken = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    try {
      const token = req.header('x-auth-token');
      if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });
      const decoded = jwt.verify(token, config.ACCESS_TOKEN_SECRET);
      req.user = await User.findById(decoded);
      next();
    } catch (err) {
      res.status(401).json({ msg: 'Token is not valid' });
    }
  }