module.exports = (db, DataTypes) => 
    db.sequelize.define("genre", {
        genreID: {
            type: DataTypes.STRING(32),
            primaryKey: true
        },
        genreName: {
            type: DataTypes.STRING(40),
            allowNull: false
        },
    })
