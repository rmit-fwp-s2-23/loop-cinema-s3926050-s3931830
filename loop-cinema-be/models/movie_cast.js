module.exports = (db, DataTypes) => 
    db.sequelize.define("movie_cast", {
        movieID: {
            type: DataTypes.STRING(32),
            primaryKey: true,
            references: {
                model: db.movie,
                key: "movieID"
            }
        },
        castID: {
            type: DataTypes.STRING(32),
            primaryKey: true,
            references: {
                model: db.cast,
                key: "castID"
            }
        },
    })

  
