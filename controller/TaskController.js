// import {taskSchemaModel} from "../models/Task";

//____________________Database schema start__________________________//

import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    task: {
        type: String,
        require: true,
    },
    check: {
        type: Boolean,
        require: true,
    },
    date: {
        type: Date,
        default: Date.now(),
    },
});

const taskSchemaModel = mongoose.model("Task", taskSchema)

//____________________Database schema END__________________________//
let newItems = [];

export const getAllTask = async (req, res, next) => {
   
    let options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric", 
      };

    try {

        const tasksList = await taskSchemaModel.find();

        var today = new Date();
        let dayVariable = today.toLocaleDateString("en-US", options);

        return res.render("index.ejs", {currentDay: dayVariable, newListItem: newItems, tasksList});
        // tasklist: tasksList
    } catch (err) {
        
        res.status(500).send({error: err.message})

    }

  next()
};

export const createTask = async (req, res, next) => {
    const task = req.body;

    if(!task.task){
        return res.redirect("/")
    }

    try{

        await taskSchemaModel.create(task) 
        return res.render("work.ejs")

    } catch (err) {
        res.status(500).send({error: err.message})
    }
    next()
};

export const postAllTask = (req, res, next) => {
   
    let item = req.body.newItem;

    newItems.push(item);

    res.redirect("/");

    next()
}


