const db = require("../database/db")
const argon2 = require("argon2")
const moment = require("moment")

// Get all users
exports.getAllUsers = async (req, res) => {
    const users = await db.user.findAll();
  
    res.status(200).json(users)
};

// Get one user by id
exports.getUserById = async (req, res) => {
    const userID = req.params.userID;
    const user = await db.user.findByPk(userID);
  
    res.status(200).json(user);
};

// Get user if login para matches with db
exports.loginUser = async (req, res) => {
    const username = req.query.username;
    const password = req.query.password;

    const user = await db.user.findOne({where: {userEmail: username}})

    if (user === null) {
        res.status(404).json(null)
    } else if (await argon2.verify(user.userPasswordHashed, password) === false) {
        res.status(401).json(null)
    } else {
        res.status(200).json(user)
    }
}

exports.createUser = async (req, res) => {
    const email = req.body.email;
    console.log(email);
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
        res.status(403).json(null)
    }
}
