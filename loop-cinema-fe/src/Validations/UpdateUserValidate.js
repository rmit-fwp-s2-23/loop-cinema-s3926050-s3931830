import axios from "axios";

/**
 * validate register value
 * @param {*} values : register value
 * @returns register value error
 * @description : better practice compared to loginValidate as it do not messed with localStorage
 * 
 * do not have unique email check yet
 */
export default async function UpdateUserValidate (values) {
    const API_HOST = "http://localhost:3001/api/users";
    let updateUserErrors = {};
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
    if (!values.userFirstName) {
      updateUserErrors.firstName = 'First name is required.';
    } 
    if (!values.userLastName) {
      updateUserErrors.lastName = 'Last name is required.';
    } 
    
    if (!values.userPhone) {
      updateUserErrors.phone = 'Phone number is required.';
    } else if (!/^[\d]{1,10}$/.test(values.userPhone)) {
      updateUserErrors.phone = 'Invalid phone number format.'
    } 

    if (!values.userDOB) {
      updateUserErrors.dob = 'Date of birth is required.';
    } 

    if (!values.userPostCode) {
      updateUserErrors.postCode = 'Post code is required.';
      // digits with 1 - 10 characters
    } else if (!/^[\d]{1,10}$/.test(values.userPostCode)) {
      updateUserErrors.postCode = 'Invalid post code format.'
    } 

    if (JSON.stringify(updateUserErrors) === JSON.stringify({})) {
      const userID = values.userID
      const newUser = {}
      newUser.userFirstName = values.userFirstName
      newUser.userLastName = values.userLastName
      newUser.userPhone = values.userPhone
      newUser.userDOB = values.userDOB
      newUser.userPostCode = values.userPostCode

      await axios.patch(`http://localhost:3001/api/users/user/${userID}`, newUser)
      .catch(error => {
        if (error.response) {
          updateUserErrors.firstName = error.response.data.message
        }
      })
    }

    return updateUserErrors;
};
  