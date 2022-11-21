import listShedulesPropertiesService from "../services/listshedulesPropetiesService";
import  {Request, Response } from "express";
import { AppError,handleError } from "../errors/appErrors";
import { instanceToPlain } from "class-transformer";



const listShedulesPropertiesControler = async (req :Request,res:Response)=>{
    try{
        const id : string = req.params.id
        const list = await listShedulesPropertiesService(id)

        
        return res.status(200).json( instanceToPlain({message:"listed",schedules :list}))
        }catch(error){
            if (error instanceof AppError){
                handleError(error,res)
                }
            }
}

export default listShedulesPropertiesControler