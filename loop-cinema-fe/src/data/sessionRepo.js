import http from "../http-common.js";

/**
 * get all the details of a session and related tables
 * @returns a list of session objects
 */

const getSessionById = async (sessionID) =>{
    const response = await http.get(`/sessions/session/${sessionID}`);
    return response.data;
}


const updateSession = async (data)=>{
    const response = await http.post(`/sessions/session/noseats/${data.sessionID}`, data.value);
    return response.data;
}

export {
    getSessionById,
    updateSession
}