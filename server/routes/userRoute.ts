import { Router } from "express";
import { createUser , getAllUsers, getUser, deleteUser, editUser, loginUser, logoutUser} from "../controllers/userController"
import { auth, isAdmin } from "../middleware/auth";

export const userRouter: Router = Router();

userRouter.get('/', isAdmin, getAllUsers)
userRouter.get('/:id', auth, getUser)
userRouter.post('/create', createUser)
userRouter.delete('/:id/delete', isAdmin, deleteUser)
userRouter.put('/:id/update', auth, editUser)
userRouter.post('/:id/login', loginUser)
userRouter.post('/:id/logout', auth, logoutUser)