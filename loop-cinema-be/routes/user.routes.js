module.exports = (express, app) => {
    const controller = require("../controllers/user.controllers.js")
    const router = express.Router()

    // Select all users.
    router.get("/", controller.getAllUsers);

    // get user by id
    router.get("/user/:userID", controller.getUserById);

    // login user
    router.get("/login", controller.loginUser);

    // create user
    router.post("/createUser", controller.createUser);

    // delete user by id
    router.delete("/user/:userID", controller.removeUserById);

    // update user by id
    router.patch("/user/:userID", controller.updateUserById);

    // Add routes to server.
    app.use("/api/users", router);
}