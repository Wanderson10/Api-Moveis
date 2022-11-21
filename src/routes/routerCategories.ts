import { Router } from "express";

import createCategorieControler from "../controllers/createCategoriesControler";
import listCategoriesController from "../controllers/listCategoriesControler";
import listPropertiesCategoriesControler from "../controllers/listPropertiesCategoresControler";

import isAdmMiddleware from "../middleware/enshureIsAdmMiddleware";
import ensureAuthMidleware from "../middleware/enshureAuthTokenMidleware";
import verifyIdCategoriesMiddleware from "../middleware/verifyIDcategoriesMiddleware";

const categoryRouter = Router()

categoryRouter.post("",ensureAuthMidleware,isAdmMiddleware,createCategorieControler)
categoryRouter.get("",listCategoriesController)
categoryRouter.get("/:id/properties",verifyIdCategoriesMiddleware,listPropertiesCategoriesControler)

export default categoryRouter