// server.js create for backend api calls
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';
// import cors from 'cors';
// import ourUsers from './routes/users.js';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
const PORT = process.env.PORT || 3001;
const ATLAS_URI = process.env.ATLAS_URI;
console.log (process.env.RAPID_API_KEY);
console.log (ATLAS_URI);

const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
// app.use(cors());

if (process.env.NODE_ENV === "production") {
        app.use(
                "/static",
                express.static(path.join(__dirname, "../client/build/static"))
        );
        app.get("/", (req, res) => {
                res.sendFile(path.join(__dirname, "../client/build/"));
        });
}

// app.use('/users', ourUsers);

mongoose.connect(ATLAS_URI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
        .then(() => app.listen(PORT, () => console.log(`API Server listening on ${PORT}`)))
        .catch((error) => console.log("An Error Occurred: ", error.message));