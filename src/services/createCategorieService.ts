import AppDataSource from "../data-source"
import { Category } from "../entities/category.entity"
import { ICategoryRequest } from "../interfaces/categories"
import { AppError } from "../errors/appErrors"

const createCategorieService = async ({name}:ICategoryRequest) : Promise<Category>=>{
    const useRepository = AppDataSource.getRepository(Category)
  

    const nameCategory = useRepository.find()

    const nameArealdExists = (await nameCategory).find(cate=> cate.name === name)
    console.log(nameCategory)
console.log(nameArealdExists)
    if (nameArealdExists){
      throw new AppError(400,"this name alread exists")
  }
    
    const category =  useRepository.create({
        name,
        
    
      })
    
      await useRepository.save(category)
  
      return category
      
}

export default createCategorieService