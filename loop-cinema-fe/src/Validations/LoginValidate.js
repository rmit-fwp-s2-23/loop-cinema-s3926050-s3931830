import { getUserList, setCurrentUserId } from "../data/userRepo";

// need to update to validate unique
export default function LoginValidate(values) {
    let loginErrors = {};
    const userList = getUserList();
    /*  username (email)
        password
    */

    // required -> if fields empty then disable button and not allow submit
    if (!values.username) {
        loginErrors.username = 'Username is required.';
    } 
    
    if (!values.password) {
        loginErrors.password = 'Password is required.';
    } 
    
    if (JSON.stringify(loginErrors) === JSON.stringify({})) {
        // console.log(loginErrors);
        if (userList !== null) {
            const userListLength = userList.length;
            let isValid = false;
            for (let index = 0; index < userListLength; index++) {
                const user = userList[index];
                if (values.username === user.email && values.password === user.password) {
                    isValid = true
                    setCurrentUserId(user.user_id)
                    break;
                }
            }
            
            if (!isValid) {
                loginErrors.username = 'Invalid username or password!'
                loginErrors.password = 'Invalid username or password!'
            } 
        } else {
            loginErrors.username = 'Invalid username or password!'
            loginErrors.password = 'Invalid username or password!'
        }
    }  

    return loginErrors;
};
  