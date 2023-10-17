module.exports = (express, app) => {
    const controller = require("../controllers/review.controllers.js")
    const router = express.Router()

    // Select all users.
    router.get("/", controller.getAllReviews);

    // get reviews by movie id
    router.get("/movie/:movieID", controller.getReviewsByMovieId);

    // get reviews by user id
    router.get("/user/:userID", controller.getReviewsByUserId);

    // // login user
    // router.get("/login", controller.loginUser);

    // create user
    router.post("/createReview", controller.createReview);

    // // delete user by id
    // router.delete("/user/:userID", controller.removeUserById);

    // // update user by id
    // router.patch("/user/:userID", controller.updateUserById);

    // Add routes to server.
    app.use("/api/reviews", router);
}