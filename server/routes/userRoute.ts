import { Router } from "express";
import { createUser , getAllUsers, getUser, deleteUser, editUser, loginUser, logoutUser} from "../controllers/userController"
import { auth, isAdmin } from "../middleware/auth";

export const userRouter: Router = Router();

userRouter.get('/', isAdmin, getAllUsers)
userRouter.get('/:id', isAdmin, getUser)
userRouter.post('/create', isAdmin, createUser)
userRouter.delete('/:id/delete', isAdmin, deleteUser)
userRouter.put('/:id/update', auth, isAdmin, editUser)
userRouter.post('/:id/login', loginUser)
userRouter.post('/:id/logout', logoutUser)