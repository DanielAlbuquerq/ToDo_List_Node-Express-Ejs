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
        default: false,
    },
    date: {
        type: Date,
        default: Date.now(),
    },
});

const taskSchemaModel = mongoose.model("Task", taskSchema)

//____________________Database schema END__________________________//


let newItems = [];  

let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric", 
  };

var today = new Date();
let dayVariable = today.toLocaleDateString("en-US", options);

// ___________GetAllTask START___________________________

export const getAllTask = async (req, res, next) => {
   
    // let options = {
    //     weekday: "long",
    //     year: "numeric",
    //     month: "long",
    //     day: "numeric", 
    //   };

    console.log(taskSchemaModel.check)
    
    try {

        const tasksList = await taskSchemaModel.find();
        // const task = await taskSchemaModel.findOne({_id: req.params.id})

        var today = new Date();
        let dayVariable = today.toLocaleDateString("en-US", options);
        let check = false

            res.render("index.ejs", {currentDay: dayVariable, newListItem: newItems/*array data*/, tasksList: tasksList /*mongoose data*/, task: null, taskDelete: null});

        } catch (err) {
            
        res.status(500).send({error: err.message})
    }

  next()
};
// ___________GetAllTask END___________________________


// ___________CreateTask START___________________________

export const createTask = async (req, res, next) => {
    const task = req.body;


    if(!task.task){
        res.redirect("/")
    }

    try{

    await taskSchemaModel.create(task) 
        res.redirect("/")

    } catch (err) {
        res.status(500).send({error: err.message})
    }
    next()
};
// ___________CreateTask END___________________________

export const errorTest = (req, res) => {
        res.render("errorHandler.ejs")
}

// ___________GetElementById START___________________________

export const getElementByid = async (req, res, next) => {

    try {
        
        const tasksList = await taskSchemaModel.find();
        const task= await taskSchemaModel.findOne({_id: req.params.id});

        if (req.params.method == "update" ) {


            res.render("index.ejs", {currentDay: dayVariable, tasksList: tasksList, newListItem: newItems, task:task, taskDelete:null, })

        } else {
            const taskDelete = await taskSchemaModel.findOne({_id: req.params.id});

            res.render("index.ejs", {currentDay: dayVariable, tasksList: tasksList, newListItem: newItems, task:null, taskDelete, })
        }

    } catch (err) {
        res.status(500).send({error: err.message})
    }

    next()
}
// ___________GetElementById END___________________________


// ___________PostAllTask START___________________________

export const postAllTask = (req, res, next) => {

    let item = req.body.newItem;

    newItems.push(item);

    res.redirect("/");

    next()
}
// ___________PostAllTask END___________________________

// ___________Update Task START_________________________

export const updateOneTask = async (req, res, next) => {

    try{

        const taskBody = req.body;
        
        await taskSchemaModel.updateOne({_id: req.params.id}, taskBody)
        res.redirect("/")

    } catch (err) {
        res.status(500).send({error: err.message})
    }
    next()
};
// ___________Update Task END_____________________________


// ___________DeleteOneTask START___________________________
export const deleteOneTask = async (req, res, next) => {



    try{
        await taskSchemaModel.deleteOne({_id: req.params.id})  
        res.redirect("/")

    } catch (err) {
        res.status(500).send({error: err.message})
    }
    next()

}
// ___________Delete Task END________________________________________


// ___________Update Task from Array START__________________________

// ___________Update Task from Array END_____________________________


//____________Get Item By Id  START__________________________________
// let item = req.body.newItem;

export const getItemById = async (req, res, next) => {
    
    itemContent = req.body.newItem

try {
   
    if (req.params.method == "updateItem" ) { 
            res.redirect("/" )
    }

} catch (err) {s
    res.status(500).send({error: err.message})
}

next()

}
//_____________Get Element By Id END_________________________________


// ___________Delete Task from Array START___________________________
export const deleteArrayItem = async (req, res, next) => {
    
    try{
        newItems.splice(await req.params.id, 1)
        res.redirect('/') 

    } catch (err) {
        res.status(500).send({error: err.message})
    }

    next()
}
// ___________Delete Task from Array END___________________________

// ___________taskCheck from Array END___________________________
export const taskCheck = async (req, res, next) => {
    
    try{
        const task= await taskSchemaModel.findOne({_id: req.params.id});

        //Conditional (ternary) operator
        task.check ? task.check = false : task.check = true;

        //normal if
        // if(task.check){
        //     task.check = false 

        // } else {
        //     task.check = true
        // }

        await taskSchemaModel.updateOne({_id: req.params.id}, task)
        res.redirect("/")
    } catch (err) {
        res.status(500).send({error: err.message})

    }
    next()
}

