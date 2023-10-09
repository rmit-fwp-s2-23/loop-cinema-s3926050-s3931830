module.exports = (express, app) => {
    const controller = require("../controllers/user.controllers.js")
    const router = express.Router()

    // Select all users.
    router.get("/", controller.getAllUsers);

    // get user by id
    router.get("/user/:userID", controller.getUserById);

    // login
    router.get("/login", controller.login);

    // Add routes to server.
    app.use("/api/users", router);
}