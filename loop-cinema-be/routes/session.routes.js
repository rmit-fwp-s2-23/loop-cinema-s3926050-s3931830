module.exports = (express, app) => {
    const controller = require("../controllers/session.controllers.js")
    const router = express.Router()

    // Select all sessions.
    router.get("/", controller.getAllSessions);

    // get a session by id
    router.get("/session/:sessionid", controller.getSessionById);

    //Update sessionNoOfSeat
    router.post("/session/noseats/:sessionID", controller.updateSessionNumberOfSeat);

    // Add routes to server.
    app.use("/api/sessions", router);
}