const express = require('express')// establishes express server
const path = require('path')//this is used for public
const server_port = process.env.PORT || 4444 //this is used for heroku to use its port 
const app = express();//calls the express

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/', express.static(path.join(__dirname, 'public')))

app.listen(server_port)