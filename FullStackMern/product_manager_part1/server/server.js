// import express, cors; set port to 8000
const express = require('express');
const app = express();
const cors = require('cors')
const PORT = 8000;
// require configuration file
require('./config/mongoose.config');

// middleware for formatting and allowing post requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// import routes
const Routes = require('./routes/product.routes')
Routes(app)



app.listen(PORT, ()=> 
    console.log(`Listening on port: ${PORT}`)
);