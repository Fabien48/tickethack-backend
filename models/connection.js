const mongoose = require('mongoose');
const connectionString ='mongodb+srv://fabienlog:Mongodb48@cluster0.qg4s3.mongodb.net/Tickethack';

mongoose.connect(connectionString, { connectTimeoutMS: 2000})
.then(() => console.log('Database connected'))
.catch(error => console.error(error));
