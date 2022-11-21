import { IAddressRequest } from "../interfaces/properties";
import { IPropertyRequest } from "../interfaces/properties";
import { Properties } from "../entities/property.entity";
import { Addresses } from "../entities/addresses.entity";
import { Category } from "../entities/category.entity";
import AppDataSource from "../data-source"
import { AppError } from "../errors/appErrors";


const createPropertiesService =async ({value , size,categoryId}:IPropertyRequest,address:IAddressRequest) => {
    const propertyRepository = AppDataSource.getRepository(Properties)
    const AddressesRepository = AppDataSource.getRepository(Addresses)
    const categoriesRepository = AppDataSource.getRepository(Category)

    const findCategory= await categoriesRepository.findOneBy({
        id : categoryId 
    })
 if(!findCategory){
    throw new AppError (404,"Category not find")
 }


    const findAddresses = await AddressesRepository.findOne({
        where:{zipCode:address.zipCode}
    })
    const findAddressesNumber = await AddressesRepository.findOne({
        where:{number:address.number}
    })
     if (findAddresses || findAddressesNumber){
        throw new AppError (400,"Adresses alread exists!")
     }


    


    if(address.state.length > 2){
        throw new AppError (403,"state must be only 2 characters long")
    }

    if(address.zipCode.length > 8){
        throw new AppError (403,"zip code must be only 8 characters long")
    }

    const newAddress =  AddressesRepository.create(address)
    await AddressesRepository.save(newAddress)
   
   

    const properties = new Properties()
    properties.value = value
    properties.size = size
    properties.category= findCategory
    properties.address = newAddress
    

    propertyRepository.create(properties)



    await propertyRepository.save(properties)

    return properties


    
   



}


export default createPropertiesService