module.exports = (express, app) => {
    const controller = require("../controllers/movie.controllers.js")
    const router = express.Router()

    // Select all movies.
    router.get("/", controller.getAllMovies);

    // get movie by id
    router.get("/movie/:movieID", controller.getMovieById);

    // Add routes to server.
    app.use("/api/movies", router);
}