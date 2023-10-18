module.exports = (express, app) => {
    const controller = require("../controllers/review.controllers.js")
    const router = express.Router()

    // Select all users.
    router.get("/", controller.getAllReviews);

    // get reviews by movie id
    router.get("/movie/:movieID", controller.getReviewsByMovieId);

    // get reviews by user id
    router.get("/user/:userID", controller.getReviewsByUserId);

    // create review
    router.post("/createReview", controller.createReview);

    // delete review by user id
    router.delete("/user/:userID", controller.removeReviewsByUserId);

    // delete review by review id
    router.delete("/review/:reviewID", controller.removeReviewByReviewId);

    // update review by review id
    router.patch("/review/:reviewID", controller.updateReviewByReviewId);

    // Add routes to server.
    app.use("/api/reviews", router);
}