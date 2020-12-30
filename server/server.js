// server.js create for backend api calls
// import axios from 'axios';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import express, { response } from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import fetch from 'node-fetch';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
const PORT = process.env.PORT || 3001;
const ATLAS_URI = process.env.ATLAS_URI;
const WEATHER_API = process.env.WEATHER_API;

const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

if (process.env.NODE_ENV === "production") {
        app.use(
                "/static",
                express.static(path.join(__dirname, "../client/build/static"))
        );
        app.get("/", (req, res) => {
                res.sendFile(path.join(__dirname, "../client/build/"));
        });
}

app.get('/weather/:myQuery', async (request, response) => {
        const myQuery = request.params.myQuery.split(',');
        // console.log ("myQuery is: ",myQuery);        
        const myLoc = myQuery[0];
        const myDays = 3;
        const WEATHER_URL = `${WEATHER_API}q=${myLoc}&days=${myDays}`;
        console.log (WEATHER_URL);
        const fetch_response = await fetch(WEATHER_URL);
        const json = await fetch_response.json();
        response.json(json);
});

mongoose.connect(ATLAS_URI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
        .then(() => app.listen(PORT, () => console.log(`API Server listening on ${PORT}`)))
        .catch((error) => console.log("An Error Occurred: ", error.message));