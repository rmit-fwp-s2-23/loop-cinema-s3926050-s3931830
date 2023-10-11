module.exports = (db, DataTypes) => 
    db.sequelize.define("location", {
        locationID: {
            type: DataTypes.STRING(32),
            primaryKey: true
        },
        locationName: {
            type: DataTypes.STRING(128),
            allowNull: false
        },
        locationAddress: {
            type: DataTypes.TEXT('tiny'),
            allowNull: false
        },
        locationPhone: {
            type: DataTypes.STRING(30),
            allowNull: false,
            validate: {
                is: /^[\d]{1,10}$/
            }
        },
        locationImage: {
            type: DataTypes.STRING(256),
            allowNull: false
        }
    })
