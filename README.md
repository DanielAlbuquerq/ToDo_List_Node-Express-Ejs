# ToDo_List_Node-Express-Ejs
Open: <a target="_blank"> https://todo-list-daniel-31d4167bc658.herokuapp.com/ </a>
 
 This project was running normally on my Local machine but I suffered a lot with this error after Heroku Deployment.
 After a deep research, I found the basic solution.

 

 ## Error on Heroku
![alt text](https://github.com/DanielAlbuquerq/ToDo_List_Node-Express-Ejs/blob/main/HerokuError.png)

#### To solve this problem you can't forget to insert mongoose.connect() method inside an async function.


I made this complete ToDo list using MVC architecture, Node/Express.js, mongoose, ejs, bootstrap, messages, modal, and tooltip.




