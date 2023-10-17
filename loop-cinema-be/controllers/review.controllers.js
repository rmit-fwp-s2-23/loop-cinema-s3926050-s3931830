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
        attributes: {exclude: ['createdAt']},
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
        attributes: {exclude: ['createdAt']},
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

exports.createReview = async (req, res) => {
    const userID = req.body.userID;
    const movieID = req.body.movieID;

    const user = await db.user.findByPk(userID)
    const movie = await db.movie.findByPk(movieID)

    if (user === null || movie === null) {
        res.status(404).json({
            message: "Create review failed"
        })
    } else {
        try {
            const audience_review = await db.audience_review.create({
                audienceReviewID: "AR" + moment().format('YYMMDDHHmmss'),
                audienceReviewComment: req.body.audienceReviewComment,
                audienceReviewScore: req.body.audienceReviewScore, 
                movieID: movieID, 
                userID: userID
            });

            res.status(201).json(audience_review)
        } catch (error) {
            res.status(403).json({
                message: "Wrong format"
            })
        }
    }
}