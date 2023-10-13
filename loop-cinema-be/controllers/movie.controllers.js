const db = require("../database/db")
const argon2 = require("argon2")
const moment = require("moment")

// Get all users
exports.getAllMovies = async (req, res) => {
    const movies = await db.movie.findAll();
  
    res.status(200).json(movies)
};

// Get one user by id (get firstName - lastName - email only if there is forMovie param)
exports.getMovieById = async (req, res) => {
    const movieID = req.params.movieID;
    const movie = await db.movie.findOne({
        where: {
            movieID: movieID
        },
        include: [
            db.trailer, db.session, db.audience_review
        ]
    });

    res.status(200).json(movie)
};
