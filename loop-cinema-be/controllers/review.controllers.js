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

exports.removeReviewsByUserId = async (req, res) => {
    const userID = req.params.userID;

    try {
        await db.audience_review.destroy({where: {userID: userID}})
        // status code 204 - no content -> no content being responsed
        // use 200 if want to get a message
        res.status(200).json({
            message: `Delete reviews of user id ${userID} successfully!`
        })
    } catch (error) {
        res.status(403).json({
            message: `Delete reviews of user unsuccessfully!`
        })
    }
}

exports.removeReviewByReviewId = async (req, res) => {
    const reviewID = req.params.reviewID;

    try {
        // if try to parse the same reviewID that was deleted -> still get success but db is unaffected
        // -> minor issues - come back later
        await db.audience_review.destroy({where: {audienceReviewID: reviewID}})
        // status code 204 - no content -> no content being responsed
        // use 200 if want to get a message
        res.status(200).json({
            message: `Delete review id ${reviewID} successfully!`
        })
    } catch (error) {
        res.status(403).json({
            message: `Delete review unsuccessfully!`
        })
    }
}

exports.updateReviewByReviewId = async (req, res) => {
    const reviewID = req.params.reviewID;

    let audience_review = await db.audience_review.findByPk(reviewID);

    if (audience_review === null) {
        res.status(404).json({
            message: `There are no review with the id ${reviewID}`
        })
    } else {
        try {
            if (req.body.audienceReviewComment) {
                await db.audience_review.update({audienceReviewComment: req.body.audienceReviewComment}, {where: {audienceReviewID: reviewID}})
            }

            if (req.body.audienceReviewScore) {
                await db.audience_review.update({audienceReviewScore: req.body.audienceReviewScore}, {where: {audienceReviewID: reviewID}})
            }

            audience_review = await db.audience_review.findByPk(reviewID);
            res.status(201).json(audience_review)
        } catch (error) {
            res.status(403).json({
                message: "Failed to update review"
            })
        }
    }
}