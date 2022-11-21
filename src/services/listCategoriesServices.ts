import AppDataSource from "../data-source";
import { Category } from "../entities/category.entity";
const listCategorieService= async () => {
   


    const userRepository = AppDataSource.getRepository(Category)

    const categories = userRepository.find({
        relations :{properties:true}
})

    return categories
}

export default listCategorieService
        