module.exports = (db, DataTypes) => 
    db.sequelize.define("rating_type", {
        ratingTypeID: {
            type: DataTypes.STRING(32),
            primaryKey: true
        },
        ratingTypeName: {
            type: DataTypes.STRING(40),
            allowNull: false
        },
    })
