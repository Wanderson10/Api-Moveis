import AppDataSource from "../data-source"
import { IUserRequest } from "../interfaces/users"
import { User } from "../entities/user.entity"
import { hash } from "bcrypt"
import { AppError } from "../errors/appErrors"
const createUserService = async ({name, email,password,isAdm} : IUserRequest) : Promise<User>=>{
  const useRepository = AppDataSource.getRepository(User)
  const hashedPassword = await hash(password,10)
  
  const users = await useRepository.find()

  const emailAlreadyExists = users.find(user => user.email === email)

  if (emailAlreadyExists) {
      throw new AppError(400,"email aread exists")
  }
  const user =  useRepository.create({
    name,
    email,
    password : hashedPassword,
    isAdm

  })

  await useRepository.save(user)

  return user
}


export default createUserService 