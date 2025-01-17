const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const mongoose = require('mongoose');
const connectDB = require('./config/db');

// Load env vars
dotenv.config({path: './config/config.env'});

// Connect to database
// connectDB();

// Route files
const bootcamps = require('./routes/bootcamps')


const app = express();

// Dev logging middleware
if (process.env.NODE_ENV == 'development') {
    app.use(morgan('dev'));
}

// Mount routers
app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT || 5000;

// const server = app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));

// //Handle unhandled promise rejections
// process.on('unhandledRejection', (err, promise) => {
//     console.log(`Error: ${err.message}`.red);
//     // Close server and exit process
//     server.close(() => process.exit(1));
// })
mongoose.connect('mongodb+srv://thao123:thao123@thaohuynh.l2i9r.mongodb.net/test?retryWrites=true&w=majority&appName=ThaoHuynh')
.then(() => {

    app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));

}).catch(err => {
    console.log(err);
})