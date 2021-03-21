const mongoose = require('mongoose');

module.exports = () => {
    const dbName = process.env.DB_NAME;
    const options = {
        dbName: dbName,
        useNewUrlParser: true,
        useUnifiedTopology: true
    };

    mongoose.connect(process.env.DB_URI || "", options).catch(err => { new Error(`Error : ${err.Message}`) });

    mongoose.connection.on('connected', () => console.log(`Successfuly connected to ${dbName} database`));
    mongoose.connection.on('error', err => { new Error(`Database error message : ${err.message}`) });
    mongoose.connection.on('disconnected', () => console.log(`Disconnected from ${dbName} database`));
};