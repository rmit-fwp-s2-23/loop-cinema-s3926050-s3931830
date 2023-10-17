const db = require("../database/db")

// Get all sessions
exports.getAllSessions = async (req, res) => {
    const sessions = await db.sessions.findAll({
        attributes: {exclude: ['createdAt', 'updatedAt']},
        include: [
            {
                model: db.location,
                attributes: ['ratingTypeName']
            }
        ]
    });
  
    res.status(200).json(movies)
};

//get all information about session and related tables by sessinoID
exports.getSessionById = async (req, res) => {
    const sessionID = req.params.sessionid;
    const session = await db.session.findByPk(sessionID, {
        attributes: {exclude: ['createdAt', 'updatedAt']},
        include: [
            {
                model: db.location,
                attributes: {exclude: ['createdAt', 'updatedAt', 'locationID']}
            },
            {
                model: db.reservation,
                attributes: ['reservationNumberOfSeat']
            },
            {
                model: db.movie,
                attributes: ['movieTitle', 'moviePoster', 'movieBanner']
            }
        ]
    })

    res.status(200).json(session);
};

//Create a new Session
exports.createSession = async (req, res) =>{
    //TODO
};

//Update an existing Session via ID
exports.updateSessionByID = async (req, res) =>{
    //TODO
};

//Delete a sessino via ID
exports.deleteSession = async (req, res) =>{
    //TODO
};

//Update Session No of Seats
exports.updateSessionNumberOfSeat = async (req, res) =>{
    const sessionID = req.params.sessionID;

    db.session.update({sessionNumberOfSeat: req.body.sessionNumberOfSeat},{
        where:{sessionID: sessionID}
    })
    .then(num => {
        if (num == 1) {
          res.send({
            message: "Session was updated Successfully"
          });
        } else {
          res.send({
            message: `Unsuccessful at updating Session with id=${sessionID}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Tutorial with id=" + sessionID
        });
      });

}

