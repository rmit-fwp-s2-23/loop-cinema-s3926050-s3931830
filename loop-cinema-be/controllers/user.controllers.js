const db = require("../database/db")
const argon2 = require("argon2")

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
exports.login = async (req, res) => {
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
