module.exports = (db, DataTypes) => 
    db.sequelize.define("session", {
        sessionID: {
            type: DataTypes.STRING(32),
            primaryKey: true
        },
        sessionTime: {
            type: DataTypes.DATE,
            allowNull: false
        },
        sessionNumberOfSeat: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 10,
            validate: {
                min: 0,
                max: 10
            }
        },
        sessionIsAvailable: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        },
    })
