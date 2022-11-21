import { Router } from "express";

import createPropertiesControler from "../controllers/createPropertiesControler";
import listPropertiesControler from "../controllers/listPropertiesControler";

import ensureAuthMidleware from "../middleware/enshureAuthTokenMidleware";
import isAdmMiddleware from "../middleware/enshureIsAdmMiddleware";



const propertyRouter = Router()


propertyRouter.post("",ensureAuthMidleware,isAdmMiddleware,createPropertiesControler)
propertyRouter.get("",listPropertiesControler)


export default propertyRouter