const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/EmployeeDB", { useNewUrlParser: true }, (error)=>{
    if(!error)
        {
            console.log("Success.")
        }
        else
        {
            console.log("Error connecting to db :(" + error)
        }
});

const Course = require("./employee.model");