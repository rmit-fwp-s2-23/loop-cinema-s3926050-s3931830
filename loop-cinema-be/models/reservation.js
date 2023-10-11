module.exports = (db, DataTypes) => 
    db.sequelize.define("reservation", {
        reservationID: {
            type: DataTypes.STRING(32),
            primaryKey: true
        },
        reservationNumberOfSeat: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
            validate: {
                min: 1,
                max: 10
            }
        }
    })
