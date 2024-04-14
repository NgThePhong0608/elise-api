import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dbConfig from "./config/dbConfig.js";

dotenv.config();
console.log(process.env.MONGO_URI);
dbConfig();

const app = express();
app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
