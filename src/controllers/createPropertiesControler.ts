import createPropertiesService from "../services/createPropertyServices";
import { Request, Response } from "express";
import { AppError,handleError } from "../errors/appErrors";

const createPropertiesControler = async (req: Request, res: Response) => {
  try {
    const properties = req.body;
    const { address } = properties;

    const propert = await createPropertiesService(properties, address);
    return res.status(201).json(propert);
  } catch(error){
    if (error instanceof AppError){
        handleError(error,res)
        }
    }
};

export default createPropertiesControler