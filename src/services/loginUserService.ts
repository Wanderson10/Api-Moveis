import { IUserLogin } from "../interfaces/users";
import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";
import bcrypt from "bcrypt"
import  jwt  from "jsonwebtoken";
import { AppError } from "../errors/appErrors";



const loginUserService = async ({email,password,} : IUserLogin,meutoken : string)=>{
 const useRepository = AppDataSource.getRepository(User)
 const acount = await useRepository.findOneBy({
   email
 })

 
 if(!acount){
    throw new AppError (403,"Wrong email or password! :(")
 }

 if (!bcrypt.compareSync(password, acount?.password)){
    throw new AppError (403,"Wrong email or password! :(")
 }

 const token = jwt.sign(
    {
    email :email,
    isAdm : acount.isAdm,
    isActive : acount.isActive,
    id : acount.id
   },
    String(process.env.JWT_SECRET),
    {expiresIn : '1d'}
 )
 
  
  
 return token
}

export default loginUserService
