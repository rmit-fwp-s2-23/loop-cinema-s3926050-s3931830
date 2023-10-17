module.exports = (express, app) =>{
    const controller = require("../controllers/location.controllers.js")
    const router = express.Router()

    //get all locations
    router.get("/", controller.getAllLocations);

    // Add routes to server.
    app.use("/api/locations", router);
}