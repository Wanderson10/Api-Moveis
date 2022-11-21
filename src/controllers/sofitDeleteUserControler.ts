import softDeleteUserService from "../services/softDeleteUserService";
import { Request, Response } from "express";
import { AppError,handleError } from "../errors/appErrors";


const softDeleteUserControler = async (req : Request,res : Response)=>{
    try {
      
        const id : string = req.params.id
        const updatedUser = await softDeleteUserService(id)
        return res.status(204).json({
      message: "Soft delete completed!"})
       }catch(error){
        if (error instanceof AppError){
            handleError(error,res)
            }
        }
}

export default softDeleteUserControler