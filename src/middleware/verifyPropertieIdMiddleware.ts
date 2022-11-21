import {Request, Response, NextFunction} from 'express'
import AppDataSource from '../data-source'
import { Properties } from '../entities/property.entity'

const  verifyIdPropertiesMiddleware = async (req : Request , res : Response, next : NextFunction)=>{
     const {id} = req.params
     const propertiesRepository = AppDataSource.getRepository(Properties)


    const findUser = await propertiesRepository.findOneBy({
         id
    })
    
     if (!findUser){
        return res.status(404).json({
            message:  "invalid Id :("
        })
    }

    return next()
}

export default verifyIdPropertiesMiddleware