
import { Router } from "express";
import userLoginControler from "../controllers/userLoginControler";

const routerLogin = Router()

routerLogin.post('',userLoginControler)


export default routerLogin