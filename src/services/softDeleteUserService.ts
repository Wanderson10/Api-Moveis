import AppDataSource from "../data-source";
import { User } from "../entities/user.entity"
import { AppError } from "../errors/appErrors";

const softDeleteUserService = async (id:string)=>{

    const useRepository = AppDataSource.getRepository(User)


    const findUser = await useRepository.findOneBy({
        id
    })

    
   
    
    if (findUser!.isActive === false){
        throw new AppError(400,"User alread inative!")
    }
    
    await useRepository.update(
        id,
        {
           isActive : false
            
        } 
    )
 

}

export default softDeleteUserService