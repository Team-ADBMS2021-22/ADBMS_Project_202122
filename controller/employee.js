const path = require('path');
const { model } = require('mongoose');
var insertData = require('../models/employee');
module.exports = {
    userForm: function(req,res){
        res.render(path.join(__dirname,'..','views','employee.ejs'));
    },
    createData:function(req, res){
        var inputData = req.body;
        insertData.createData(inputData, function(data){
            res.render(path.join(__dirname,'..','views','employee.ejs'));
            console.log('data entered');
        })
    }
} 