import { Router } from "express";
import createShedulesControler from "../controllers/createShedulesControler";
import listShedulesPropertiesControler from "../controllers/listShedulesPropetiesService";

import verifyIdPropertiesMiddleware from "../middleware/verifyPropertieIdMiddleware";
import isAdmMiddleware from "../middleware/enshureIsAdmMiddleware";
import ensureAuthMidleware from "../middleware/enshureAuthTokenMidleware";

const shedulesRouter = Router()

shedulesRouter.post("",ensureAuthMidleware,createShedulesControler)
shedulesRouter.get("/properties/:id",ensureAuthMidleware,verifyIdPropertiesMiddleware,isAdmMiddleware,listShedulesPropertiesControler)

export default shedulesRouter