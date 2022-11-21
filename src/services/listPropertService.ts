import AppDataSource from "../data-source";
import { Properties } from "../entities/property.entity";


const listPropertiesService = async () => {
  const propertiesRepository = AppDataSource.getRepository(Properties);
 
  const findCategory = await propertiesRepository.find({
    relations: { category: true, address: true },
  });
  

  return findCategory;
};
export default listPropertiesService