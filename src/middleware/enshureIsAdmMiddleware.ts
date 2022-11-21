import {Request, Response, NextFunction} from 'express'

const  isAdmMiddleware =  (req : Request , res : Response, next : NextFunction)=>{

    if (!req.user.isAdm){
        return res.status(403).json({
            message:  "You are not Adm :("
        })
    }

    return next()
}

export default isAdmMiddleware