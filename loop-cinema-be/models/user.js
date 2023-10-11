module.exports = (db, DataTypes) =>
    db.sequelize.define("user", {
        userID: {
            type: DataTypes.STRING(32),
            primaryKey: true
        },
        userEmail: {
            type: DataTypes.STRING(40),
            allowNull: false,
            unique: true,
            isEmail: true,
            validate: {
                is: /^[\S][a-zA-Z0-9]*@[a-zA-Z0-9]+(?!.*\.\.)(?!.*\.$)\.[a-zA-Z0-9\.]+$/
            }
        },
        userPasswordHashed: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userFirstName: {
            type: DataTypes.STRING(40),
            allowNull: false
        },
        userLastName: {
            type: DataTypes.STRING(40),
            allowNull: false
        },
        userPhone: {
            type: DataTypes.STRING(30),
            allowNull: false,
            validate: {
                is: /^[\d]{1,10}$/
            }
        },
        userDOB: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            isDate: true
        },
        userPostCode: {
            type: DataTypes.STRING(40),
            allowNull: false,
            validate: {
                is: /^[\d]{1,10}$/
            }
        },
        userIsSubscribe: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        },
        userPoint: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 100
        }
    });
