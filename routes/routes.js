import { Router } from "express";
import {getAllTask, postAllTask, createTask, getElementByid, errorTest, updateOneTask } from "../controller/TaskController.js";

import {app} from "../index.js"

export const router = Router()

    router
    .route("/")
    .get(getAllTask)
    .post(postAllTask)

    router
    .route("/createTask")
    .post(createTask)

    router
    .route("/getElementById/:id/:method")
    .get(getElementByid)

    router
    .route("/error")
    .get(errorTest)

    router
    .route("/updateOne/:id")
    .post(updateOneTask)









