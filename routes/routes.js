import { Router } from "express";
import {getAll} from "../controller/TaskController.js";

export const routes = Router()
routes.get("/", getAll)



