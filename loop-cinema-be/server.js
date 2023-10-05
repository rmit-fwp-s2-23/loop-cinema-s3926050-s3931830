require("dotenv").config();

const express = require("express");
const bodyParse = require("body-parser")

const app = express();
app.use(bodyParse.json());

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Loop cinema server is running!"
    });
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})