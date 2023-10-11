module.exports = (db, DataTypes) => 
    db.sequelize.define("movie_genre", {
        movieID: {
            type: DataTypes.STRING(32),
            primaryKey: true,
            references: {
                model: db.movie,
                key: "movieID"
            }
        },
        genreID: {
            type: DataTypes.STRING(32),
            primaryKey: true,
            references: {
                model: db.genre,
                key: "genreID"
            }
        },
    })

  
