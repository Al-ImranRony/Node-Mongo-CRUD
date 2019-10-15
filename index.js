const connection = require("./model/db");

const express = require("express");
const application = express();

const employController = require("./controllers/employController");

application.listen("3000", ()=>{
    console.log("Server started.");
});

const path = require("path");
const expressHandlebars = require("express-handlebars");
const bodyParser = require("body-parser");

application.use(bodyParser.urlencoded({
    extended : true
}));
application.use(bodyParser.json());

application.set('views', path.join(__dirname, "/views/"))

application.engine("hbs", expressHandlebars({
    extname : "hbs",
    defaultLayout : "mainlayout",
    layoutDir : __dirname + "views/layouts"
}));

application.set("view engine", "hbs")

application.get("/", (req, res)=>{
    //res.send('<h1>Hello morphin<h1>')
    res.render("index", {})
})


application.use("/employee", employController);

