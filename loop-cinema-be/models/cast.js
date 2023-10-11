module.exports = (db, DataTypes) => 
    db.sequelize.define("cast", {
        castID: {
            type: DataTypes.STRING(32),
            primaryKey: true
        },
        castName: {
            type: DataTypes.STRING(40),
            allowNull: false
        },
    })
