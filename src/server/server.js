const express = require('express');
require('../../dotenv');
require('../db/db');
const cors = require('cors');
const userRouter = require('../routers/user');
const seriesRouter = require('../routers/series');
const filmRouter = require('../routers/film');

const port = process.env.NODE_ENV || 3001;

//Initialize app
const app = express();

//register 
//middlewares
app.use(express.json());
app.use(cors({origin:true}));
//routers
app.use(userRouter);
app.use(seriesRouter);
app.use(filmRouter);

// start the server
app.listen(port,() =>
{
    console.log('server is up on port ',port);
});

