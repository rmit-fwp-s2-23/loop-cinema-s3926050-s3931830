import http from "../http-common.js";

/**
 * Create a reservation Repo in the database
 */

const createReservation = async (data)=>{
    console.log("I am at createReservation")
    const response = await http.post("/reservations/createReservation", data);
    console.log("I finished createReservation")
    console.log(response.data)
    return response.data;
}

export{
    createReservation
}