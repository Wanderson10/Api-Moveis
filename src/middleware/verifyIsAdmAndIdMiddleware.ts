import {Request, Response, NextFunction} from 'express'


const verifyIsAdmAndIdMiddleware =async (req :Request, res : Response, next:NextFunction) => {
    const idparam : string = req.params.id
    if (req.user.id !== idparam && !req.user.isAdm){
        return res.status(401).json({message: "Only adm can changed others users"})
    }

   return next()
} 

export default verifyIsAdmAndIdMiddleware