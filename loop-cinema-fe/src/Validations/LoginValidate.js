import { getUserList } from "../data/userRepo";

// need to update to validate unique
export default function LoginValidate(values) {
    let loginErrors = {};
    const userList = getUserList();
    const userListLength = userList.length;
    /*  username (email)
        password
    */

    // required -> if fields empty then disable button and not allow submit
    if (!values.username) {
        loginErrors.username = 'Username is required.';
    } else if (!values.password) {
        loginErrors.password = 'Password is required.';
    } else {
        let isValid = false;
        for (let index = 0; index < userList.length; index++) {
            const user = userList[index];
            if (values.username === user.email && values.password === user.password) {
                isValid = true
                break;
            }
        }
        
        if (!isValid) {
            loginErrors.username = 'Invalid username or password!'
            loginErrors.password = 'Invalid username or password!'
        } 
    }

    

    return loginErrors;
};
  