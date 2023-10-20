const db = require("../database/db")

/**
 * 
 * @param {*} req 
 * @param {*} res 200 - list of all locations
 * 
 * @description get all locations
 */
exports.getAllLocations = async (req, res)=>{
    const allLocations = await db.location.findAll({
        attributes: {exclude: ['createdAt', 'updatedAt']},
        include: [
            {
                model: db.session,
                attributes: {exclude: ['createdAt', 'updatedAt', 'locationID']}
            }
        ]
    });
    res.status(200).json(allLocations);
}

