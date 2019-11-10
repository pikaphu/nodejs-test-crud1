// load require modules (main app)
const express = require('express')
const app = express()

// parse for API communication
const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// load config
require('./config/config.js')

// my helpers (global function)
const helper = require('./helpers/api')
app.use(helper)

// 0. test
// app.get('/test', (req, res, next) => res.send('test ok') )

// 1. router 
var indexRouter = require('./routes/index')
var apiRouter = require('./routes/api')

app.use('/', indexRouter)
app.use('/api', apiRouter)

// view OR "view engine"
app.use('/', express.static(__dirname + '/views'))
app.get('/', (req, res) => res.sendFile(__dirname + '/views/index.html') )

// final - start server
app.listen(global.myConfig.server_port, () => console.log('App listening on port ' + global.myConfig.server_port))