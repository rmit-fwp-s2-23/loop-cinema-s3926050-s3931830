import { getUserList, setCurrentUserId } from "../data/userRepo";
import axios from "axios";

/**
 * validate login values
 * @param {*} values : login values
 * @returns errors from login values
 * @description : included localStorage validation and modification -> not good
 * 
 * may need to update to use verify function from userRepo
 * do not have unique email check
 */
export default async function LoginValidate(values) {
    const API_HOST = "http://localhost:3001/api/users";
    const USER_KEY = "user";

    const username = values.username
    const password = values.password

    let loginErrors = {};
    // const userList = getUserList();
    /*  username (email)
        password
    */

    // required
    if (!values.username) {
        loginErrors.username = 'Username is required.';
    } 
    
    if (!values.password) {
        loginErrors.password = 'Password is required.';
    } 
    
    // if login errors are not empty -> check localStorage
    if (JSON.stringify(loginErrors) === JSON.stringify({})) {
        const response = await axios.get(API_HOST + "/login", {params: {username, password}})
        const userID = response.data

        if (userID === null) {
            loginErrors.username = 'Invalid username or password!'
            loginErrors.password = 'Invalid username or password!'
        } else {
            setCurrentUserId(response.data)
        }

        // if (userList !== null) {
        //     const userListLength = userList.length;
        //     let isValid = false;
        //     for (let index = 0; index < userListLength; index++) {
        //         const user = userList[index];
        //         if (values.username === user.email && values.password === user.password) {
        //             isValid = true
        //             setCurrentUserId(user.user_id)
        //             break;
        //         }
        //     }
            
        //     if (!isValid) {
        //         loginErrors.username = 'Invalid username or password!'
        //         loginErrors.password = 'Invalid username or password!'
        //     } 
        // } else {
        //     loginErrors.username = 'Invalid username or password!'
        //     loginErrors.password = 'Invalid username or password!'
        // }
    }  

    return loginErrors;
};
  