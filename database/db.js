import mongoose from "mongoose";

export const connectToDb =  () => {

   mongoose.connect(
    "mongodb+srv://danieldeveloper:5Nd3iJLmTuOHd9h5@todolist.v9u4vj0.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  ).then(() => {
    console.log("Database connected!!")
  }).catch((err) => console.log(err))
  
};
