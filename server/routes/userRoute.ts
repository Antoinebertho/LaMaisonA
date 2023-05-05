import { Router } from "express";
import { createUser , getAllUsers, getUser, deleteUser, editUser, loginUser, logoutUser} from "../controllers/userController"

export const userRouter: Router = Router();

userRouter.post('/create', createUser)
userRouter.get('/', getAllUsers)
userRouter.get('/:id', getUser)
userRouter.delete('/:id/delete', deleteUser)
userRouter.put('/:id/update', editUser)
userRouter.post('/:id/login', loginUser)
userRouter.post('/:id/logout', logoutUser)