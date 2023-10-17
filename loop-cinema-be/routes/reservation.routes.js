module.exports = (express, app) => {
    const controller = require("../controllers/reservation.controllers.js")
    const router = express.Router()


    //Get user by userID
    router.get("/user/:userID", controller.getReservationsByUserId);

    //Get user by reservationID
    router.get("/reservation/:reservationID", controller.getReservationsByReservationId);

    //create a reservation
    router.post("/createReservation", controller.createReservation);

    // Add routes to server.
    app.use("/api/reservations", router);
}