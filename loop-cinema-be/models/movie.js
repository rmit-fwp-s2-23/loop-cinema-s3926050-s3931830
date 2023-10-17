module.exports = (db, DataTypes) =>
    db.sequelize.define("movie", {
        movieID: {
            type: DataTypes.STRING(32),
            primaryKey: true
        },
        movieTitle: {
            type: DataTypes.STRING(128),
            allowNull: false
        },
        movieApercu: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        movieSynopsis: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        movieReleaseDate: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        movieRuntime: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        moviePoster: {
            type: DataTypes.TEXT('tiny'),
            allowNull: false
        },
        movieBanner: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        movieAverageScore: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
            validate: {
                min: 1,
                max: 5
            }
        },
    });
