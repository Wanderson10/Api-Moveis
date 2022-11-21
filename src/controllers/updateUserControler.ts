import updateUserService from "../services/updateUserService";
import  {Request, Response } from "express";
import { IUserUpdate } from "../interfaces/users";
import { AppError,handleError } from "../errors/appErrors";


const updateUserControler = async (req: Request, res: Response)=>{
    try {
     const {name,email,password,id} : IUserUpdate = req.body
     const {isAdm,isActive} = req.body
     

     const idParams: string = req.params.id
     const updatedUser = await updateUserService({name,email,password,id},isAdm,isActive,idParams)
     return res.status(200).json({ message: "updated", user : updatedUser,
    
    })
    }catch(error){
        if (error instanceof AppError){
            handleError(error,res)
            }
        }
}
export default updateUserControler