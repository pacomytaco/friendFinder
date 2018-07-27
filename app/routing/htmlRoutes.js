//dependencies
var path = require('path');

//export html routes
module.exports = function(app) {
    app.get('/', function(req, res) {
    
    app.get('/survey', function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/survey.html'));
    });

    app.use(function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/home.html'));
    });
    })
}