var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json())

const cors = require('cors')
const corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions))

/*
const db = require('./app/config/db.config.js');

db.sequelize.sync({force: true}).then(() => {
    console.log('Drop and Resync with { force: true }');
});

require('./app/route/test.route.js')(app);
*/

//server creating

var server = app.listen(8000, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("App is listening at http://%s:%s", host, port)
})