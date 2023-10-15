import { users } from "./database-brief.js"
import moment from 'moment'

const USER_LIST_KEY = "user_list"; // array of user objects
const CURRENT_USER_ID_KEY = "current_user_id"; // user id key

/**
 * init user list to localStorage first time
 * @returns none
 */
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

/**
 * get user list from localStorage
 * @returns an array of users
 */
const getUserList = () => {
    const response = localStorage.getItem(USER_LIST_KEY);
    return JSON.parse(response);   
}

/**
 * remove current localStorage user list and replace with new user list
 * @param {*} newUserList : new user list
 */
const setUserList = (newUserList) => {
    removeUserList();
    localStorage.setItem(USER_LIST_KEY, JSON.stringify(newUserList))
}

/**
 * add new user to user list and update on localStorage
 * @param {*} newUser : new user object
 */
const addUserToList = (newUser) => {
    let currentUserList = getUserList();

    // if no key was found -> set new user_list to empty array
    if (currentUserList == null) currentUserList = [];

    const newUserList = [...currentUserList];
    newUserList.push(newUser);
    
    setUserList(newUserList)
}

/**
 * remove user list from localStorage
 */
const removeUserList = () => {
    localStorage.removeItem(USER_LIST_KEY);
}

/**
 * get user by user id
 * @param {*} searchUserId : user id
 * @returns user object if found - null if not
 */
const getUserByUserId = (searchUserId) => {
    const userList = getUserList()
    if (userList !== null) {
        const userListLength = userList.length;
        for (let index = 0; index < userListLength; index++) {
            const user = userList[index];
            if (searchUserId === user.user_id) {
                return user
            }
        }
        return null
    }
    return null
}

/**
 * get user object with firstName, lastName, email by user id
 * @param {*} searchUserId : user id
 * @returns user object if found - null if not
 * @description : use this function for displaying user info in movie pages 
 * useful for security as it does not load full user info
 */
const getUserInfoByUserId = (searchUserId) => {
    const userList = getUserList()
    let userInfoList = {}
    if (userList !== null) {
        const userListLength = userList.length;
        for (let index = 0; index < userListLength; index++) {
            const user = userList[index];
            if (searchUserId === user.user_id) {
                userInfoList.firstName = user.firstName;
                userInfoList.lastName = user.lastName;
                userInfoList.email = user.email
            }
        }
        return userInfoList
    }
    return null
}

/**
 * delete a user by user id
 * @param {*} userId : user id
 * @description : can use splice as there are only 1 user object with a user id
 */
const deleteUserByUserId = (userId) => {
    let userList = getUserList()
    if (userList !== null) {
        const userListLength = userList.length;
        for (let index = 0; index < userListLength; index++) {
            const user = userList[index];
            if (JSON.parse(userId) === user.user_id) {
                userList.splice(index, 1)
                removeCurrentUserId()
                const newUserList = [...userList]
                setUserList(newUserList)
                break;
            }
        }
    }
}

/**
 * update current user object with new values
 * @param {*} values : new values
 * @description : values already contain user id
 */
const updateUserByUserId = (values) => {
    const newUserObject = {...values}

    let userList = getUserList()
    if (userList !== null) {
        const userListLength = userList.length;
        for (let index = 0; index < userListLength; index++) {
            const user = userList[index];
            if (newUserObject.user_id === user.user_id) {
                userList.splice(index, 1, newUserObject)
                const newUserList = [...userList]   
                setUserList(newUserList)
            }
        }
    }
}

/* 

---- USER ----

*/

/**
 * set current user id localStorage
 * @param {*} userId : user id
 */
const setCurrentUserId = (userId) => {
    localStorage.setItem(CURRENT_USER_ID_KEY, JSON.stringify(userId))
}

/**
 * get current user id localStorage
 * @returns current user id 
 * @description : this returns a JSON web (stringified) string 
 * Using this string -> have to convert by JSON.parse
 * 
 * may need to update return to JSON.parse() and update all usage
 */
const getCurrentUserId = () => {
    const currentUserId = localStorage.getItem(CURRENT_USER_ID_KEY);
    return currentUserId
}

/**
 * remove current user id from localStorage
 */
const removeCurrentUserId = () => {
    localStorage.removeItem(CURRENT_USER_ID_KEY)
}

/**
 * verify log in user - if correct then log in
 * @param {*} loginUserObject : user object
 * @returns true if logged in - false if not
 * @description : do not use this function yet
 * 
 * may need to update to use this function - rather than validate in validations
 */
const verifyUserLogin = (loginUserObject) => {
    const userList = getUserList();

    if (userList == null || userList == []) {
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

/**
 * create new user object, update localStorage and set current user id
 * @param {*} registerUserObject : incomplete user object
 */
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

    addUserToList(newUser)
    setCurrentUserId(newUser.user_id)
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
    createNewUser,
    getUserByUserId,
    deleteUserByUserId,
    updateUserByUserId,
    getUserInfoByUserId
}