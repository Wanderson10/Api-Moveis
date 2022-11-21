import createCategorieService from "../services/createCategorieService";
import  {Request, Response } from "express";
import { ICategoryRequest } from "../interfaces/categories";
import { AppError, handleError } from "../errors/appErrors";

const createCategorieControler = async (req :Request , res :Response)=>{
try{
const category :ICategoryRequest = req.body
const createdCategory = await createCategorieService(category)

console.log(createdCategory)
return res.status(201).json(createdCategory)
}catch(error){
   if (error instanceof AppError){
       handleError(error,res)
       }
   }
   
}


export default createCategorieControler