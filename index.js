const express = require('express');
const app = express();
const path = require('path');
const morgan  = require('morgan');
const helmet = require('helmet');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require("cors");
const engine = require('consolidate');
const http = require('http');
const connectDB = require('./controllers/mongodb_controller');

const server = http.createServer(app);
const PORT = process.env.PORT || 4000;

dotenv.config();
connectDB();

app.use(helmet());
app.use(cors());
app.use(morgan("common"));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.set('views', __dirname + '/views/pages');
app.engine('html', engine.mustache);
app.set('view engine', 'html');

app.use('/', require('./routes/index'));
app.use('/auth', require('./routes/auth'));

server.listen(process.env.PORT || PORT, () => {console.log("Server UP at", PORT)});