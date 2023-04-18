import { Router } from "express";
import { createUser , getAllUsers, getUser, deleteUser, editUser, loginUser, logoutUser} from "../controllers/userController"

export const userRouter: Router = Router();

userRouter.post('/create', createUser)
userRouter.get('/users', getAllUsers)
userRouter.get('/users/:id', getUser)
userRouter.delete('/users/:id/delete', deleteUser)
userRouter.put('/users/:id/update', editUser)
userRouter.post('/users/login', loginUser)
userRouter.post('/users/logout', logoutUser)

module.exports = userRouter