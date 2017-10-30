"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = require("path");
var express = require("express");
var body_parser_1 = require("body-parser");
// import apiRouter from './api';
// import stateRouting from './middleware/routing.mw';
var clientPath = path_1.join(__dirname, '../client');
var app = express();
app.use(express.static(clientPath));
app.use(body_parser_1.json());
// app.use('/api', apiRouter);
// app.get('*', stateRouting);
app.listen(process.env.PORT || 3000, function () {
    console.log('Listening on Port: 3000');
});
