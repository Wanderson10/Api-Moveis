import { AppError,handleError } from "../errors/appErrors";
import { Request, Response } from "express";
import createShedulesServices from "../services/createShedulesServices";
const createShedulesControler = async (req: Request, res: Response) => {
  try {
    const schedules= req.body
    const userId = req.user.id
    

    const createdSchedule = await createShedulesServices(schedules,userId);
    return res.status(201).json({shedules : createdSchedule, message : "Schedule created :)"});

  } catch(error){
    if (error instanceof AppError){
        handleError(error,res)
        }
    }
};

export default createShedulesControler