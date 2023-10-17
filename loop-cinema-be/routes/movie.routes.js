module.exports = (express, app) => {
    const controller = require("../controllers/movie.controllers.js")
    const router = express.Router()

    // Select all movies.
    router.get("/", controller.getAllMovies);

    // update all movie average score
    router.patch("/updateScoreBulk", controller.updateAllMovieAverageScore)

    // get movie by id
    router.get("/movie/:movieID", controller.getMovieById);

    // update average score of movie by id
    router.patch("/movie/movieScore/:movieID", controller.updateMovieAverageScoreById);

    // Add routes to server.
    app.use("/api/movies", router);
}