import express from "express";
import db from "./config/db.js"
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/index.js";
import bodyParser from "body-parser";

dotenv.config();

const app = express();

try {
    await db.authenticate();
    console.log('Database connected...');
} catch (error) {
    console.error('connection error:', error);
}

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());
app.use(userRoutes);

const PORT = process.env.NODE_PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});