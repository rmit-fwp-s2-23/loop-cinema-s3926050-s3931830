const db = require("../database/db")
const argon2 = require("argon2")
const moment = require("moment")

// Get all users
exports.getAllUsers = async (req, res) => {
    const users = await db.user.findAll();
  
    res.status(200).json(users)
};

// Get one user by id (get firstName - lastName - email only if there is forMovie param)
exports.getUserById = async (req, res) => {
    const userID = req.params.userID;
    const user = await db.user.findByPk(userID);
  
    const forMovie = req.query.forMovie || false;

    if (forMovie !== false) {
        const userDTO = {
            userID: user.userID,
            userFirstName: user.userFirstName,
            userLastName: user.userLastName,
            userEmail: user.userEmail
        }

        res.status(200).json(userDTO);
    } else {
        res.status(200).json(user);
    } 
};

// Get user if login para matches with db
exports.loginUser = async (req, res) => {
    const username = req.query.username;
    const password = req.query.password;

    const user = await db.user.findOne({where: {userEmail: username}})

    if (user === null) {
        // cannot status other than 200 - that is a status for server - if not 200 -> cannot display on front end
        // can use catch to handle error with error.response when status code is not 2**
        res.status(404).json(null)
    } else if (await argon2.verify(user.userPasswordHashed, password) === false) {
        res.status(403).json(null)
    } else {
        res.status(200).json(user.userID)
    }
}

/**
 * create new user in database
 * @param {*} req 
 * @param {*} res 
 * @description check if email is already in database
 */
exports.createUser = async (req, res) => {
    const email = req.body.email;

    const user = await db.user.findOne({where: {userEmail: email}})

    if (user === null) {
        const hash = await argon2.hash(req.body.password, { type: argon2.argon2id });
  
        try {
            const user = await db.user.create({
                userID: "U" + moment().format('YYMMDDHHmmss'),
                userEmail: email,
                userPasswordHashed: hash,
                userFirstName: req.body.firstName,
                userLastName: req.body.lastName,
                userPhone: req.body.phone,
                userDOB: req.body.dob,
                userPostCode: req.body.postCode,
                userIsSubscribe: req.body.subscribe,
            });

            res.status(201).json(user)
        } catch (error) {
            res.status(403).json({
                message: "Wrong format"
            })
        }
    } else {
        res.status(403).json({
            message: "This email has already been registered with an account"
        })
    }
}

exports.removeUserById = async (req, res) => {
    const userID = req.params.userID;

    try {
        await db.user.destroy({where: {userID: userID}})
        res.status(204).json({
            error: `Delete user with id ${userID} successfully!`
        })
    } catch (error) {
        res.status(403).json({
            error: `Delete user unsuccessfully!`
        })
    }
}

exports.updateUserById = async (req, res) => {
    const userID = req.params.userID;

    let user = await db.user.findByPk(userID);

    if (user === null) {
        res.status(404).json({
            message: `There are no user with the id ${userID}`
        })
    } else if (req.body.point) {
        res.status(400).json({
            message: `Cannot edit point`
        })
    } else if (req.body.password) {
        res.status(400).json({
            message: `Cannot edit password`
        })
    } else if (req.body.email) {
        res.status(400).json({
            message: `Cannot edit email`
        })
    } else {
        try {
            // if (req.body.email) {
            //     await db.user.update({userEmail: req.body.email}, {where: {userID: userID}})
            // }

            // if (req.body.password) {
            //     const hash = await argon2.hash(req.body.password, { type: argon2.argon2id });
            //     await db.user.update({userPasswordHashed: hash}, {where: {userID: userID}})
            // }

            if (req.body.userFirstName) {
                await db.user.update({userFirstName: req.body.userFirstName}, {where: {userID: userID}})
            }

            if (req.body.userLastName) {
                await db.user.update({userLastName: req.body.userLastName}, {where: {userID: userID}})
            }

            if (req.body.UserPhone) {
                await db.user.update({userPhone: req.body.UserPhone}, {where: {userID: userID}})
            }

            if (req.body.userDOB) {
                await db.user.update({userDOB: req.body.userDOB}, {where: {userID: userID}})
            }

            if (req.body.userPostCode) {
                await db.user.update({userPostCode: req.body.userPostCode}, {where: {userID: userID}})
            }

            // if (req.body.subscribe) {
            //     await db.user.update({userIsSubscribe: req.body.subscribe}, {where: {userID: userID}})
            // }

            user = await db.user.findByPk(userID);
            res.status(201).json(user)
        } catch (error) {
            res.status(403).json({
                message: "Failed to update user"
            })
        }
    }
}