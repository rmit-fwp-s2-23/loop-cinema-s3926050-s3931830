const db = require("../database/db")
const argon2 = require("argon2")
const moment = require("moment");
const { Sequelize } = require("sequelize");

/**
 * 
 * @param {*} req 
 * @param {*} res 200 - list of movies 
 * @description get a list of all movies with specified fields
 */
exports.getAllMovies = async (req, res) => {
    const movies = await db.movie.findAll({
        attributes: ['movieID', 'movieBanner', 'movieTitle', 'movieApercu', 'movieRuntime', 'moviePoster', 'movieAverageScore'],
        include: [
            {
                model: db.rating_type,
                attributes: ['ratingTypeName']
            }
        ]
    });
  
    res.status(200).json(movies)
};

// Get one movie by id (get necessary display info + id only)
/**
 * 
 * @param {*} req params (movieID)
 * @param {*} res 200 - the movie with movieID
 * 
 * @description get the movie with movieID with specified fields
 */
exports.getMovieById = async (req, res) => {
    const movieID = req.params.movieID;
    const movie = await db.movie.findOne({
        where: {
            movieID: movieID
        },
        attributes: {exclude: ['createdAt', 'updatedAt', 'directorID', 'ratingTypeID']},
        include: 
        // {all: true, nested: true}
        [
            {
                model: db.trailer,
                attributes: ['trailerURL']
            },
            {
                model: db.session,
                attributes: {exclude: ['createdAt', 'updatedAt', 'movieID']},
                // all: true,
                // nested: true,
                include: {
                    model: db.location,
                    attributes: ['locationName']
                }
            },
            {
                model: db.audience_review,
                attributes: {exclude: ['movieID', 'createdAt']}
            },
            {
                model: db.genre,
                as: "genreIDs", //specify alias
                attributes: {exclude: ['createdAt', 'updatedAt']},
                through: {attributes:[]}
            },
            {
                model: db.cast,
                as: "castIDs",
                attributes: ['castName'],
                through:{attributes: []}
            },
            {
                model: db.director
            },
            {
                model: db.rating_type,
                attributes: ['ratingTypeName']
            }
        ]
    });

    res.status(200).json(movie)
};

// have to call this api whenever reviews or movies is being modified
// ---> need to search more how to solve this (db logic ? seperate function ?)
/**
 * 
 * @param {*} req params(movieID)
 * @param {*} res 200 - success message | 400 - no movie with movieID
 * 
 * @description update average movie score of the movie with movieID
 * 
 * @description have to call this api whenever review table is modified
 * ---> need a better solution (call api within another api ? db logic auto update ? seperate function)
 */
exports.updateMovieAverageScoreById = async (req, res) => {
    const movieID = req.params.movieID;

    let movie = await db.movie.findByPk(movieID);

    if (movie === null) {
        res.status(404).json({
            message: "Cannot update average movie score"
        })
    } else {
        // const audience_review_count = await db.audience_review.count({col: 'audienceReviewScore', where: {movieID: movieID}})
        const audience_review = await db.audience_review.findAll({
            attributes: [
                [Sequelize.fn('COUNT', Sequelize.col('audienceReviewScore')), 'audienceReviewCount'],
                [Sequelize.fn('SUM', Sequelize.col('audienceReviewScore')), 'audienceReviewSum']
            ],
            where: {
                movieID: movieID
            },
            // to access dataValues
            raw: true
        })

        if (audience_review[0].audienceReviewCount !== 0) {
            const audience_review_score = Math.ceil(Number(audience_review[0].audienceReviewSum) / Number(audience_review[0].audienceReviewCount))
            await db.movie.update({movieAverageScore: audience_review_score}, {where: {movieID: movieID}})

            // movie = await db.movie.findByPk(movieID);
        }

        res.status(200).json({
            message: "Movie average score has been updated!"
        })
    }
}

/**
 * 
 * @param {*} req 
 * @param {*} res 404 - no movies in db | 200 - success message
 * 
 * @description update all movie average score
 */
exports.updateAllMovieAverageScore = async (req, res) => {
    const movies = await db.movie.findAll()

    if (movies === null) {
        res.status(404).json({
            message: "There are no movies"
        })
    } else {
        movies.forEach(async movie => {
            const audience_review = await db.audience_review.findAll({
                attributes: [
                    [Sequelize.fn('COUNT', Sequelize.col('audienceReviewScore')), 'audienceReviewCount'],
                    [Sequelize.fn('SUM', Sequelize.col('audienceReviewScore')), 'audienceReviewSum']
                ],
                where: {
                    movieID: movie.movieID
                },
                // to access dataValues
                raw: true
            })
    
            if (audience_review[0].audienceReviewCount !== 0) {
                const audience_review_score = Math.ceil(Number(audience_review[0].audienceReviewSum) / Number(audience_review[0].audienceReviewCount))
                await db.movie.update({movieAverageScore: audience_review_score}, {where: {movieID: movie.movieID}})
            } 
        });
    }

    res.status(200).json({
        message: "All movie score has been updated!"
    })
}
