import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";
import { IUserUpdate } from "../interfaces/users";
import {hash} from "bcrypt"
import { AppError } from "../errors/appErrors";



const updateUserService = async ({name,email,password,id} : IUserUpdate, isAdm :boolean,isActive :boolean,idParams :string): Promise <User> =>{
const useRepository = AppDataSource.getRepository(User)

const findUser = await useRepository.findOneBy({
    id
})






if(id){
    throw new AppError(401," id not to be changed ")
}

if (isAdm === true || isAdm === false){
    throw new AppError(401,"isAdm not to be changed ")
}

if (isActive === true || isActive === false){
    throw new AppError(401,"isActive not to be changed ")
}

if(!findUser){
    throw new AppError (401,"user not found")
}
 await useRepository.update(
    idParams,
    {
        name:name ? name : findUser!.name,
        email:email ? email : findUser!.email,
        password:password  ? await hash(password,10) : findUser!.password,
        
    } 
)

const usuario = await useRepository.findOneBy({
    id
})




return usuario!

}

export default updateUserService