const db = require("../database/db")

//get all reservation by userID
exports.getReservationsByUserId = async (req, res)=>{
    const userID = req.params.userID
    const reservations = await db.reservation.findAll({
        where: {
            userID: userID
        },
        attributes: ['reservationID', 'reservationNumberOfSeat', 'sessionID'],
        include: [
            {
                model: db.session,
                attributes: ['sessionTime'],
                include: [
                    {
                        model: db.movie,
                        attributes: ['movieTitle']
                    },
                    {
                        model: db.location,
                        attributes: ['locationName', 'locationAddress']
                    }
                ]
            }
        ]
    });

    res.status(200).json()
}

//get a reservation by reservationID
exports.getReservationsByReservationId = async (req, res)=>{
    const reservationID = req.params.reservationID
    const reservations = await db.reservation.findAll({
        where: {
            reservationID: reservationID
        },
        attributes: ['reservationNumberOfSeat'],
        include: [
            {
                model: db.session,
                attributes: ['sessionTime'],
                include: [
                    {
                        model: db.movie,
                        attributes: ['movieTitle']
                    },
                    {
                        model: db.location,
                        attributes: ['locationName', 'locationAddress']
                    }
                ]
            }
        ]
    })
}


//create a reservation
exports.createReservation = async (req, res) =>{
    console.log("I am at the controller")
    try{
        console.log(req.body);
        const reservation = await db.reservation.create({
            reservationID: req.body.reservationID,
            reservationNumberOfSeat: req.body.reservationNumberOfSeat,
            sessionID: req.body.sessionID,
            userID: req.body.userID
        });
        res.status(201).json(reservation);
    }catch(e){
        console.log("Caught an Error");
        console.log(e)
        res.status(403).json({
            error: e.message
        })
    }
}
