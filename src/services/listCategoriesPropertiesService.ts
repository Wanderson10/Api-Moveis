import AppDataSource from "../data-source";
import { Category } from "../entities/category.entity";
import { Properties } from "../entities/property.entity";
import { AppError } from "../errors/appErrors";

const listPropertiesCategoriesServices  = async(id:string)=>{
    const categoriesRepository = AppDataSource.getRepository(Category)
    const propertiesRepository = AppDataSource.getRepository(Properties)

    const categorie= await categoriesRepository.findOne({
       where : {id},
       relations :{properties:true}
    })
    
    if (!categorie){
        throw new AppError(404,"categorie not found")
    }
    
 
return categorie
}

export default listPropertiesCategoriesServices

