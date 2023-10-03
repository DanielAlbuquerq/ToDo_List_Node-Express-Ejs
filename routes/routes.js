import { Router } from "express";
import {getAllTask, postAllTask, createTask, getElementByid, errorTest, updateOneTask, deleteOneTask, getItemById} from "../controller/TaskController.js";


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

    //Routes decision method comes from the <a> tag on index.ejs.
    //href="/getElementById/<%=taskItem._id%>/update"
    //href="/getElementById/<%=taskItem._id%>/delete"

    router
    .route("/deleteOne/:id")
    .get(deleteOneTask)

    router
    .route("/error")
    .get(errorTest)

    router
    .route("/updateOne/:id")
    .post(updateOneTask)

    // Array routes_____________________START

    router
    .route("/getItemById/:id/:method")
    .get(getItemById)

