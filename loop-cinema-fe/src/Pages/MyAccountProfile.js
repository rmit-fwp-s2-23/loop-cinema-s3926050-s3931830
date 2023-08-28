import { Link, useNavigate } from "react-router-dom";
import { deleteUserByUserId, getCurrentUserId, getUserByUserId, updateUserByUserId } from "../data/userRepo";
import { useEffect, useState } from "react";
import useForm from "../CustomHooks/useForm";
import useLockScroll from "../CustomHooks/useLockScroll";
import RegisterValidate from "../Validations/RegisterValidate";
import '../css/pages/MyAccountProfile.css'

const MyAccountProfile = (props) => {
    const navigate = useNavigate()
    const userId = JSON.parse(getCurrentUserId())

    // set updating state for user when updating
    const [updating, setUpdating] = useState(false)
    
    // toggle eye icon
    const [passwordType, setPasswordType] = useState("password");
    const [confirmPasswordType, setConfirmPasswordType] = useState("password")

    useEffect(() => {
        if (userId === null) navigate("/home")
    }, [userId])

    const updateSuccess = () => {
        setUpdating(true)
    }

    const [currentUser, setCurrentUser] = useState(getUserByUserId(userId))

    const {
        values,
        errors,
        handleChange,
        handleSubmit,
        setValues,
        isSubmitting
    } = useForm(updateSuccess, RegisterValidate);

    // initialize first time values from localStorage
    useEffect(() => {
        setValues({...currentUser})
    }, [])

    useEffect(() => {
        if (JSON.stringify(errors) === JSON.stringify({}) && isSubmitting) {
            props.updateUser(values)   
        }
    }, [updating])

    // confirm message
    const confirmDeleteUser = () => {
        document.body.style.overflow = "hidden"
        const element = document.getElementById("my-account-profile-confirm-delete");
        element.setAttribute("open", true)
    }

    // cancel the request for delete user
    const cancelDeleteUser = () => {
        document.body.style.overflow = "auto"
        const element = document.getElementById("my-account-profile-confirm-delete");
        element.removeAttribute("open")
    }

    const deleteUser = () => {
        const elementBig = document.getElementById("my-account-profile-confirm-delete");
        const elementButton = document.getElementById("my-account-profile-confirm-delete-confirm");

        elementButton.setAttribute("aria-busy", true)
        setTimeout(() => {
            elementButton.removeAttribute("aria-busy")
            elementBig.removeAttribute("open")
            document.body.style.overflow = "auto"
        }, 1000)
        
        props.deleteUser()
    }

    // toggle eye icon
    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
        }

    const toggleConfirmPassword = () => {
        if (confirmPasswordType === "password") {
            setConfirmPasswordType("text")
            return;
        }
        setConfirmPasswordType("password")
    }

    return (
        <div className="my-account-profile">
            <dialog id="my-account-profile-confirm-delete">
                <article>
                    <h3>Delete your Looper account?</h3>
                    <p>
                    Beware that deleting this account means deleting all data relating this account, including comments and points.
                    No action can be made to recover.
                    </p>
                    <div className="my-account-profile-confirm-delete-buttons my-account-profile-header-delete">
                        <button class="secondary outline" onClick={cancelDeleteUser}>
                            <span>Cancel</span>
                        </button>
                        <button class="contrast" onClick={deleteUser} id="my-account-profile-confirm-delete-confirm">
                            <span>Confirm</span>
                        </button>
                    </div>
                </article>
            </dialog>
            <div className='login-dialog-content'>
                <div className="my-account-profile-header">
                    <div className="my-account-profile-header-title">
                        <h2 className='login-dialog-content-title'>My Profile</h2>
                        <Link className="my-account-profile-back-link" to={`/account`}>
                            <span className="my-account-profile-back-link-span">Back to Dashboard</span>
                        </Link>
                    </div>
                    <div className="my-account-profile-header-delete">
                        <button class="contrast" onClick={confirmDeleteUser}>
                            <span>Delete User</span>
                        </button>
                    </div>
                </div>
                <div className='login-dialog-content-form'>
                    <form onSubmit={handleSubmit} noValidate>
                    <div class="grid">
                            <label for="firstName">
                                First name *
                                <input autoComplete="off" type="text" id="firstName" name="firstName" placeholder="First name" 
                                required aria-invalid={`${errors.username && 'true'}`} onChange={handleChange} 
                                value={values.firstName || ''} />
                                {
                                    errors.firstName && (
                                        <p className="input-text-help input-error">{errors.firstName}</p>
                                    )
                                }
                            </label>    

                            <label for="lastName">
                                Last name *
                                <input autoComplete="off" type="text" id="lastName" name="lastName" placeholder="Last name" 
                                required aria-invalid={`${errors.username && 'true'}`} onChange={handleChange} 
                                value={values.lastName || ''} />
                                {
                                    errors.lastName && (
                                        <p className="input-text-help input-error">{errors.lastName}</p>
                                    )
                                }
                            </label>          
                        </div>

                        <label for="email">Email address *</label>
                        <input autoComplete="off" type="email" id="email" name="email" placeholder="Email address" required
                        aria-invalid={`${errors.email && 'true'}`} onChange={handleChange} value={values.email || ''} />
                        {
                            errors.email && (
                                <p className="input-text-help input-error">{errors.email}</p>
                            )
                        }

                        <label for="password">
                            Password *
                            <input autoComplete="off" type={passwordType} id="password" name="password" placeholder="Password" required 
                            aria-invalid={`${errors.password && 'true'}`} onChange={handleChange} value={values.password || ''} />
                            {
                                passwordType === "password" 
                                ? (
                                    <i class="far fa-eye-slash eye-toggle-update" onClick={togglePassword}></i>
                                )
                                : (
                                    <i class="far fa-eye eye-toggle-update" onClick={togglePassword}></i>
                                )
                            }
                            {
                                errors.password 
                                ? (
                                    <p className="input-text-help input-error">{errors.password}</p>
                                )
                                : (
                                    <p className='input-text-help input-guide'>Password should be at least 8 characters with 1 uppercase, lowercase, special character, and 1 number.</p>
                                )
                            }
                        </label>

                        <label for="confirmPassword">
                            Confirm password *
                            <input autoComplete="off" type={confirmPasswordType} id="confirmPassword" name="confirmPassword" 
                            placeholder="Password confirm" required aria-invalid={`${errors.confirmPassword && 'true'}`} 
                            onChange={handleChange} value={values.confirmPassword || ''} />
                            {
                                confirmPasswordType === "password" 
                                ? (
                                    <i class="far fa-eye-slash eye-toggle-update" onClick={toggleConfirmPassword}></i>
                                )
                                : (
                                    <i class="far fa-eye eye-toggle-update" onClick={toggleConfirmPassword}></i>
                                )
                            }
                            {
                                errors.confirmPassword && (
                                    <p className="input-text-help input-error">{errors.confirmPassword}</p>
                                )
                            }
                        </label>

                        <div class="grid">
                            <label for="phone">
                                Phone number *
                                <input autoComplete="off" type="text" id="phone" name="phone" placeholder="Phone number" 
                                required aria-invalid={`${errors.phone && 'true'}`} onChange={handleChange} 
                                value={values.phone || ''} />
                                {
                                    errors.phone && (
                                        <p className="input-text-help input-error">{errors.phone}</p>
                                    )
                                }
                            </label>

                            <label for="dob">
                                Date of birth *
                                <input autoComplete="off" type="date" id="dob" name="dob" placeholder="Date of birth" 
                                required aria-invalid={`${errors.dob && 'true'}`} onChange={handleChange} 
                                value={values.dob || ''} />
                                {
                                    errors.dob && (
                                        <p className="input-text-help input-error">{errors.dob}</p>
                                    )
                                }
                            </label>    

                            <label for="postCode">
                                Post code *
                                <input autoComplete="off" type="text" id="postCode" name="postCode" placeholder="Post code" 
                                required aria-invalid={`${errors.postCode && 'true'}`} onChange={handleChange} 
                                value={values.postCode || ''} />
                                {
                                    errors.postCode && (
                                        <p className="input-text-help input-error">{errors.postCode}</p>
                                    )
                                }
                            </label>          
                        </div>
                        <button type="submit">Save your details</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default MyAccountProfile