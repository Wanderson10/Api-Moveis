import listPropertiesCategoriesServices from "../services/listCategoriesPropertiesService";
import  {Request, Response } from "express";
import { AppError,handleError } from "../errors/appErrors";


const listPropertiesCategoriesControler = async (req :Request,res:Response)=>{
    try{
        const id : string = req.params.id
        const list = await listPropertiesCategoriesServices(id)
        
        return res.status(200).json(list)
        }catch(error){
            if (error instanceof AppError){
                handleError(error,res)
                }
            }
}

export default listPropertiesCategoriesControler