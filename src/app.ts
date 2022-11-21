import "dotenv/config"
import "reflect-metadata";
import "express-async-errors"
import express, { NextFunction,Request,Response } from "express";
import userRoutes from "./routes/router";
import routerLogin from "./routes/routerLogin";
import categoryRouter from "./routes/routerCategories";
import propertyRouter from "./routes/routerProperties";
import shedulesRouter from "./routes/routerShedules";
import { AppError } from "./errors/appErrors";
import handleErrorMiddleware from "./middleware/handleErrorsMiddleware";




const app = express();
app.use(express.json());
app.use("/users", userRoutes);
app.use("/login",routerLogin);
app.use("/categories",categoryRouter)
app.use("/properties",propertyRouter)
app.use("/schedules",shedulesRouter)


app.use(handleErrorMiddleware)


export default app;