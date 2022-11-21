import listPropertiesService from "../services/listPropertService";
import  {Request, Response } from "express";
import { AppError,handleError } from "../errors/appErrors";



const listPropertiesControler = async (req :Request,res:Response)=>{
    try{
       
        const list = await listPropertiesService()
        return res.status(200).json((list))
        }catch(error){
            if (error instanceof AppError){
                handleError(error,res)
                }
            }
}

export default listPropertiesControler