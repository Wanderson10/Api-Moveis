import AppDataSource from "../data-source";
import { ShedulesUserProperties } from "../entities/shedules.user.properties.entities";
import { Properties } from "../entities/property.entity";
import { AppError } from "../errors/appErrors";

const listShedulesPropertiesService = async (id:string) => {
    const shedulesRepository = AppDataSource.getRepository(ShedulesUserProperties);
    const propertiesRepository = AppDataSource.getRepository(Properties)
   
   

    const findProperties = await shedulesRepository.find({
       where : {properties: {id}},
       relations :{properties:true,user:true}
    })
    
    if (!findProperties){
      throw new AppError(404,"propertie not found")
  }
    

return findProperties

}
  
  export default listShedulesPropertiesService