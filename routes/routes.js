import { Router } from "express";
import {getAllTask, postAllTask, createTask } from "../controller/TaskController.js";

import {app} from "../index.js"

export const router = Router()

    router
    .route("/")
    .get(getAllTask)
    .post(postAllTask)
    

    // .post(postAllTask)   

    router
    .route("/createTask")
    .post(createTask)








