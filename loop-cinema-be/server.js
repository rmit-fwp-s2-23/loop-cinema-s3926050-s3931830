require("dotenv").config();

const express = require("express");
const cors = require("cors");
const bodyParse = require("body-parser")
const db = require("./database/db")

const app = express();
app.use(bodyParse.json());
app.use(cors())

db.sync()

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Loop cinema server is running!"
    });
})

// Add user routes
require("./routes/user.routes.js")(express, app)
require("./routes/movie.routes.js")(express, app)
require("./routes/location.routes.js")(express, app)
require("./routes/reservation.routes.js")(express, app)
require("./routes/session.routes.js")(express, app)


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})