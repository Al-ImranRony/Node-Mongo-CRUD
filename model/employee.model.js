const mongoose = require("mongoose");

var employeeSchema = new mongoose.Schema({
    fullName : {
            type : String,
            required : "Required field"
    },
    email : {
        type : String
    },
    mobile : {
        type : String
    },
    city : {
        type : String
    }
});

employeeSchema.path('email').validate((val) => {
    emailRegExp  = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegExp.test(val);     
}, 'Invalid email.');

mongoose.model("Employee", employeeSchema);