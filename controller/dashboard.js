const path = require('path');
var fetchModel = require(path.join(__dirname, '..', 'models', 'dashboard'));

module.exports ={ fetchData:function (req, res){
    fetchModel.fetchDate(function(data){
        res.render('user-table',{userData:data});
    })
}
}