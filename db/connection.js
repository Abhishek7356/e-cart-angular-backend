const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_CONNECTION)
    .then(() => {
        console.log("Mongodb connected successfully");
    })
    .catch((err) => {
        console.log("connection error", err.message)
    })