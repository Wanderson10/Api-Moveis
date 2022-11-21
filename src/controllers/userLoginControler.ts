import { Request,Response } from "express";
import { IUserRequest } from "../interfaces/users";
import loginUserService from "../services/loginUserService";
import { AppError,handleError } from "../errors/appErrors";

let meuToken :string = ''
const userLoginControler = async (req :Request ,res : Response) => {
    
   try{
        const {email,password} : IUserRequest = req.body
        const login = await loginUserService({email,password},meuToken)
       
        return res.status(200).json({token : login})
    }
    catch(error){
        if (error instanceof AppError){
            handleError(error,res)
            }
        }
   
}
export {meuToken}

export default userLoginControler