const db = require("../database/db")
const argon2 = require("argon2")
const moment = require("moment")

// Get all reviews
exports.getAllReviews = async (req, res) => {
    const reviews = await db.audience_review.findAll();
  
    res.status(200).json(reviews)
};

// get all reviews of a movie
exports.getReviewsByMovieId = async (req, res) => {
    const movieID = req.params.movieID;
    const audience_reviews = await db.audience_review.findAll({
        where: {
            movieID: movieID
        },
        attributes: {exclude: ['createdAt', 'movieID']},
        include:
        [
            {
                model: db.user,
                attributes: ['userEmail', 'userFirstName', 'userLastName']
            }
        ]
    });

    res.status(200).json(audience_reviews)
};

// get all reviews of an user
exports.getReviewsByUserId = async (req, res) => {
    const userID = req.params.userID;
    const audience_reviews = await db.audience_review.findAll({
        where: {
            userID: userID
        },
        attributes: {exclude: ['createdAt', 'userID']},
        include:
        [
            {
                model: db.movie,
                attributes: ['movieTitle']
            }
        ]
    });

    res.status(200).json(audience_reviews)
};

