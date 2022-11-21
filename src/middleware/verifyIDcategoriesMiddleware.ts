import {Request, Response, NextFunction} from 'express'
import AppDataSource from '../data-source'
import { Category } from '../entities/category.entity'

const  verifyIdCategoriesMiddleware = async (req : Request , res : Response, next : NextFunction)=>{
     const {id} = req.params
     const categoriesRepository = AppDataSource.getRepository(Category)


    const findCategories = await categoriesRepository.findOneBy({
         id
    })
    
     if (!findCategories){
        return res.status(404).json({
            message:  "invalid Id :("
        })
    }

    return next()
}

export default verifyIdCategoriesMiddleware