const path = require('path');
const mongoose = require(path.join(__dirname,'..','database','database.js'));

var Schema = mongoose.Schema;

var dashboardSchema = new Schema({
    name: String,
    login: Date,
    logout: Date,
    task: String
});

useTable = mongoose.model('dashboard', dashboardSchema);

exports.fetchData = function(callback){
        var userData =userTable.find({});
        userData.exec(function(err, data){
            if(err) throw err;
                return callback(data);
        });
    };