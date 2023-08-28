/**
 * validate register value
 * @param {*} values : register value
 * @returns register value error
 * @description : better practice compared to loginValidate as it do not messed with localStorage
 * 
 * do not have unique email check yet
 */
export default function RegisterValidate (values) {
    let registerErrors = {};
    /*  firstName
        lastName
        phone
        dob
        postCode
        email
        password
        confirmPassword
        subscribe
    */

    // required 
    if (!values.firstName) {
      registerErrors.firstName = 'First name is required.';
    } 
    if (!values.lastName) {
      registerErrors.lastName = 'Last name is required.';
    } 
    
    if (!values.phone) {
      registerErrors.phone = 'Phone number is required.';
    } else if (!/^[\d]{1,10}$/.test(values.phone)) {
      registerErrors.phone = 'Invalid phone number format.'
    } 

    if (!values.dob) {
      registerErrors.dob = 'Date of birth is required.';
    } 

    if (!values.postCode) {
      registerErrors.postCode = 'Post code is required.';
      // digits with 1 - 10 characters
    } else if (!/^[\d]{1,10}$/.test(values.postCode)) {
      registerErrors.postCode = 'Invalid post code format.'
    } 

    if (!values.email) {
      registerErrors.email = 'Email is required.';
    } else if (!/^[\S][a-zA-Z0-9]*@[a-zA-Z0-9]+(?!.*\.\.)(?!.*\.$)\.[a-zA-Z0-9\.]+$/.test(values.email)) {
      // validate: (no start with space) + (0 or more) + @ + (1 or more) + (no consecutive '.') + . + (1 or more)
      registerErrors.email = 'Invalid email format.'
    } 

    if (!values.password) {
      registerErrors.password = 'Password is required.';
    } else if (!/^[\S](?=.{7,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&+=]).*$/.test(values.password)) {
      // validate: (no start with space) + minimum 7 char + at least 1 lowercase, 1 uppercase, 1 special
      registerErrors.password = 'Password should be at least 8 characters with 2 uppercase, lowercase, special character, and 1 number.'
    } 

    if (!values.confirmPassword) {
      registerErrors.confirmPassword = 'Password confirm is required.';
    } else if (!(values.confirmPassword === values.password)) {
      registerErrors.confirmPassword = 'Passwords are not the same.'
    }  

    // validation for first name and last name pattern
    // if (!/^[\S][a-zA-Z0-9\s,.'-]{0,19}$/.test(values.firstName)) {
    //   registerErrors.firstName = 'Invalid first name'
    // }

    // if (JSON.stringify(registerErrors) === JSON.stringify({})) {
    //   const userValue = {...values}
    //   createNewUser(userValue)
    // }

    return registerErrors;
  };
  