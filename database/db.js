import mongoose from "mongoose";

const uri = "mongodb+srv://danieldeveloper:agiHs2wJFSSsouNt@todolist.v9u4vj0.mongodb.net/?retryWrites=true&w=majority"

export const connectToDb =  async () => {

   await mongoose.connect(
    
    uri,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  ).then(() => {
    console.log("Database connected!!")
  }).catch((err) => console.log(err))
  
}; 
// process.env.DB_URI 