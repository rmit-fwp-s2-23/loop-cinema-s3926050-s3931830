import { users } from "./database-brief.js"
import moment from 'moment'

const USER_LIST_KEY = "user_list"; // array of user objects
const CURRENT_USER_ID_KEY = "current_user_id"; // user id key

// set localStorage user_list from database
const initUserList = () => {
    // check if object is already initialized
    if (localStorage.getItem(USER_LIST_KEY) !== null) {
        return
    } else {
        localStorage.setItem(USER_LIST_KEY, JSON.stringify(users));
    }
}

/* 

---- USER LIST ----

*/

// get user_list from localStorage and return an array of users
const getUserList = () => {
    const response = localStorage.getItem(USER_LIST_KEY);
    return JSON.parse(response);   
}

// set localStorage user_list to a new list
const setUserList = (newUserList) => {
    removeUserList();
    localStorage.setItem(USER_LIST_KEY, JSON.stringify(newUserList))
}

// add new user to user_list on localStorage
const addUserToList = (newUser) => {
    const currentUserList = getUserList();

    // if no key was found -> set new user_list to empty array
    if (currentUserList == null) currentUserList = [];

    const newUserList = [...currentUserList];
    newUserList.push(newUser);
    
    if (setUserList(newUserList)) {
        return true;
    } else {
        return false;
    }
}

// remove user_list from localStorage
const removeUserList = () => {
    localStorage.removeItem(USER_LIST_KEY);
}


/* 

---- USER ----

*/

// set current_user_id localStorage to a userId
const setCurrentUserId = (userId) => {
    localStorage.setItem(CURRENT_USER_ID_KEY, JSON.stringify(userId))
}

// get current_user_id localStorage 
const getCurrentUserId = () => {
    const currentUserId = localStorage.getItem(CURRENT_USER_ID_KEY);
    return JSON.parse(currentUserId)
}

// remove current_user_id from localStorage
const removeCurrentUserId = () => {
    localStorage.removeItem(CURRENT_USER_ID_KEY)
}

// verify login user - if correct then login 
const verifyUserLogin = (loginUserObject) => {
    const userList = getUserList();

    if (userList == null || userList === []) {
        return false;
    } else {
        userList.map((user) => {
            if (loginUserObject.username === user.email && loginUserObject.password === user.password) {
                setCurrentUserId(user.user_id)
                return true;
            }
            return false;
        })  
    }

}

// create new user and add user to list + update to localStorage
const createNewUser = (registerUserObject) => {
    const newUser = {
        user_id: "U" + moment().format('YYMMDDHHmmss'),
        email: registerUserObject.email,
        password: registerUserObject.password,
        firstName: registerUserObject.firstName,
        lastName: registerUserObject.lastName,
        phone: registerUserObject.phone,
        dob: registerUserObject.dob,
        postCode: registerUserObject.postCode,
        subscribe: registerUserObject.subscribe,
        points: 0,
        createdAt: moment().format('DD/MM/YYYY')
    }

    if (addUserToList(newUser)) {
        return true
    } else {
        return false;
    }
}

export {
    initUserList,
    getUserList,
    setUserList,
    addUserToList,
    removeUserList,
    setCurrentUserId,
    getCurrentUserId,
    removeCurrentUserId,
    verifyUserLogin,
    createNewUser
}