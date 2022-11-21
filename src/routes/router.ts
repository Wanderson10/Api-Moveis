import { Router } from "express";
import createUserControler from "../controllers/createUserControler";
import userListController from "../controllers/listUsersControlers";
import updateUserControler from "../controllers/updateUserControler";
import softDeleteUserControler from "../controllers/sofitDeleteUserControler";

import ensureAuthMidleware from "../middleware/enshureAuthTokenMidleware";
import isAdmMiddleware from "../middleware/enshureIsAdmMiddleware";
import verifyIdMiddleware from "../middleware/findUserIdMiddleware";
import verifyIsAdmAndIdMiddleware from "../middleware/verifyIsAdmAndIdMiddleware";


const userRoutes  = Router()

userRoutes.post('',createUserControler)
userRoutes.get('',ensureAuthMidleware,isAdmMiddleware,userListController)
userRoutes.patch('/:id',ensureAuthMidleware,verifyIdMiddleware,verifyIsAdmAndIdMiddleware,updateUserControler)
userRoutes.delete('/:id',ensureAuthMidleware,verifyIdMiddleware,isAdmMiddleware,softDeleteUserControler,)


export default userRoutes