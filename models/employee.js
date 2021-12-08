const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const employeeSchema = {
    id: String,
    login: Date,
    logout: Date,
    task: String
}

addData = mongoose.model('employees', employeeSchema);

module.exports = {
    createData:function(inputData, callback){
        userData = new addData(inputData);
        userData.save(function(err, data){
            if(err) throw err;
                return callback(data);
        });
    }
}