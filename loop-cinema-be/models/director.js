module.exports = (db, DataTypes) => 
    db.sequelize.define("director", {
        directorID: {
            type: DataTypes.STRING(32),
            primaryKey: true
        },
        directorName: {
            type: DataTypes.STRING(40),
            allowNull: false
        },
    });
