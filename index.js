import express from "express";
import bodyParser from "body-parser";
import {router} from "./routes/routes.js";
import {connectToDb} from "./database/db.js"


connectToDb();
export const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.use(router)

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
