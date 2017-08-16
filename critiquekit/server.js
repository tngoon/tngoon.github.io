var http=require('http');
var express=require('express');
var jsonfile=require('jsonfile');
const PORT = process.env.PORT || 8080;
const path = require('path');
const INDEX = path.join(__dirname, '/public');
const SCRIPTS = path.join(__dirname, '/js');

const server = express()
		.use(express.static(__dirname + '/public'))
		.listen(PORT, () => console.log('Listening on ${PORT}'));