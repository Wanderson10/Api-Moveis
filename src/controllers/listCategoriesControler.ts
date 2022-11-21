import listCategorieService from "../services/listCategoriesServices";
import  {Request, Response } from "express";
import { AppError,handleError } from "../errors/appErrors";


const listCategoriesController = async (req: Request, res: Response) => {
    try{
        
    const categories = await listCategorieService()
    return res.status(200).json(categories)
    }catch(error){
        if (error instanceof AppError){
            handleError(error,res)
            }
        }
    
    }
    
    export default listCategoriesController