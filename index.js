import express from "express";
import bodyParser from "body-parser";
import {danielF} from "./functions/functions.js";

const func1 = danielF
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'));

// app.use(express.static("public"));
// app.use(bodyParser.urlencoded({ extended: true }));

let newItems = []
app.get("/", (req, res) => {
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var today  = new Date();
    let day = today.toLocaleDateString("en-US", options)
    res.render("index.ejs",{currentDay:day, newListItem: newItems});
});

app.get("/work", (req, res) => {
    res.render("work.ejs")
});

app.post("/", (req, res) => {
    let item = req.body.newItem;
    newItems.push(item)
    res.redirect("/");
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });