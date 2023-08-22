// need to update to validate unique
export default function LoginValidate (values) {
    let loginErrors = {};
    /*  username (email)
        password
    */

    // required -> if fields empty then disable button and not allow submit
    if (!values.username) {
        loginErrors.username = 'Username is required';
    } else if (!values.password) {
        loginErrors.password = 'Password is required';
    }

    return loginErrors;
};
  