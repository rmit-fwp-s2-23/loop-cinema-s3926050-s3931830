require("dotenv").config();

const express = require("express");
const cors = require("cors");
const bodyParse = require("body-parser")
// const db = require("./database/db")

const app = express();
app.use(bodyParse.json());
app.use(cors())

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Loop cinema server is running!"
    });
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})