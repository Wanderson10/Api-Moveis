import AppDataSource from "../data-source";
import { ShedulesUserProperties } from "../entities/shedules.user.properties.entities";
import { IScheduleRequest } from "../interfaces/schedules/index";
import { User } from "../entities/user.entity";
import { Properties } from "../entities/property.entity";
import { AppError } from "../errors/appErrors";

const createShedulesServices = async (
  schedules : IScheduleRequest, userId:string):Promise <ShedulesUserProperties>  => {
  const schedulesRepository = AppDataSource.getRepository(
    ShedulesUserProperties
  );
  const userRepository = AppDataSource.getRepository(User);
  const propertiesRepository = AppDataSource.getRepository(Properties);

  

//verificando horario
 const getHour = +schedules.hour.split(" : ")[0]
 if(getHour <8 || getHour >= 18){
  throw new AppError(400,"We are not attending at this time, only between 8:00 to 18:00")
 }

  //verificando data
 const getDay = new Date(schedules.date).getDay()

 if(getDay ===0 || getDay === 6){
  
  throw new AppError(400,"schedules on week days")
 }

 // verificando user


  const findUser = await userRepository.findOneBy({
    id: userId,
  });
  if (!findUser) {
    throw new AppError(404, "User not find");
  }

  //verificando property

  
  const findProperties = await propertiesRepository.findOneBy({
    id: schedules.propertyId,
  });

  if (!findProperties) {
    throw new AppError(404, "properties not find");
  }

 
 // verificando schedule
  const agenda = await schedulesRepository.find()

  const agendaExiste = agenda.find((agenda)=> agenda)
  if (agendaExiste){
    throw new AppError(400,"date or hour alread exists")
  }

  const shedules = new ShedulesUserProperties();
  shedules.date = schedules.date;
  shedules.hour = schedules.hour;
  shedules.user = findUser;
  shedules.properties = findProperties;

  const createSchedule = schedulesRepository.create(shedules);

  await schedulesRepository.save(createSchedule);

  return   createSchedule
  
};

export default createShedulesServices;
