import { Request, Response, NextFunction } from "express";
import   jwt  from "jsonwebtoken";
import { AppError } from "../errors/appErrors";
import "dotenv/config"

const ensureAuthMidleware = async (req :Request, res : Response , next : NextFunction)=>{

   
    
    let token  = req.headers.authorization

   if(!token){
    
    throw new AppError(401,"invalid token")
   }
   token = token.split(" ")[1]
 

  jwt.verify(token, process.env.JWT_SECRET as string,(error,decoded : any)=>{
  
   console.log(process.env.JWT_SECRET)
    if(error){
    console.log(error)
    throw new AppError(401,"invalid token")
    }

    req.user ={

        isAdm : decoded.isAdm,
        id : decoded.id,
    

    }

    return  next()
  })
   
}

export default ensureAuthMidleware