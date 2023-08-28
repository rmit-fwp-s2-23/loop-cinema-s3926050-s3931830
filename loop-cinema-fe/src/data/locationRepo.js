import {locations} from "./database-brief.js";
import { getAudienceReviewList, getAudienceReviewListByMovieId, getMovieIdFromAudienceReviewList } from "./reviewRepo.js";

const LOCATION_DATA = "location_data"

/**
 * init locations list to localStorage first time
 * @returns none
 */
const initLocationList = () => {
    // check if object is already initialized
    if (localStorage.getItem(LOCATION_DATA) !== null) {
        return
    } else {
        localStorage.setItem(LOCATION_DATA, JSON.stringify(locations))
    }
}

/**
 * get location list from localStorage
 * @returns a list of locations (array)
 */
const getLocationList = () => {
    const response = localStorage.getItem(LOCATION_DATA);
    return JSON.parse(response);  
}

export {
    initLocationList,
    getLocationList
}