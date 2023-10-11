module.exports = (db, DataTypes) => 
    db.sequelize.define("audience_review", {
        audienceReviewID: {
            type: DataTypes.STRING(32),
            primaryKey: true
        },
        audienceReviewComment: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        audienceReviewScore: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 1,
                max: 5
            }
        },
    })