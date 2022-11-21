import createUserService from "../services/createUserService";
import  {Request, Response } from "express";
import { IUserRequest } from "../interfaces/users";
import {instanceToPlain} from "class-transformer"
import { AppError,handleError } from "../errors/appErrors";

const createUserControler = async (req: Request, res: Response)=>{
 try {
  const user : IUserRequest = req.body
  const createdUser = await createUserService(user)
    return res.status(201).json(instanceToPlain(createdUser))
 }catch(error){
    if (error instanceof AppError){
        handleError(error,res)
        }
    }

}

export default createUserControler