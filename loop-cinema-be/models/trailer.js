module.exports = (db, DataTypes) => 
    db.sequelize.define("trailer", {
        trailerID: {
            type: DataTypes.STRING(32),
            primaryKey: true
        },
        trailerURL: {
            type: DataTypes.STRING(256),
            allowNull: false
        },
    })
