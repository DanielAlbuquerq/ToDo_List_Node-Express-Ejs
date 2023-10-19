import mongoose from 'mongoose';

const { Schema } = mongoose;

const taskSchema = new Schema({
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

export const TaskSchemaModel = mongoose.model("Taskitem", taskSchema)

