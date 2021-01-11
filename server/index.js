// Starting point of the server application

import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
// Importing Router
import postRoutes from './routes/postRoutes.js';

// Syntax for initializing express application
const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// Express middleware to connect posts to application
// Every route inside of postRoutes is gonna start with /posts
app.use('/posts', postRoutes);

// From MongoDB Atlas
const CONNECTION_URL = "mongodb+srv://JulianBass:Caput_Drac0nis@memories-cluster.f8rf3.mongodb.net/memories-database?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

// Connecting to the database
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    // After Mongoose connects, app listens in port and sends log
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    // If connection is not successful
    .catch((error) => console.log(error.message));

mongoose.set("useFindAndModify", false);