import userListService from "../services/listUserService";
import {instanceToPlain} from "class-transformer"
import  {Request, Response } from "express";
import { AppError,handleError } from "../errors/appErrors";

const userListController = async (req: Request, res: Response) => {
try{
const users = await userListService()
return res.status(200).json(instanceToPlain(users))
}catch(error){
    if (error instanceof AppError){
        handleError(error,res)
        }
    }

}

export default userListController