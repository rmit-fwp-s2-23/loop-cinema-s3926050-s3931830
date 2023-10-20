import React, { useEffect, useState } from 'react';
import useForm from "../CustomHooks/useForm";
import RegisterValidate from "../Validations/RegisterValidate";
import logo from "../Images/logo.png"
import { createNewUser, getCurrentUserId } from "../data/userRepo";
import { useNavigate } from "react-router-dom";

const RegisterForm = (props) => {
    const navigate = useNavigate()
    const [registering, setRegistering] = useState(false)

    const registerSuccess = () => {
        // setRegistering(true)

        if (getCurrentUserId() !== null) {
            navigate("/account");
            props.setIsLoggedIn(true)

            // need reload to close modal - need to investigate further
            window.location.reload();          
        } else {
            props.setIsLoggedIn(false)
        }
    }

    const {
        values,
        errors,
        isSubmitting,
        handleChange,
        handleSubmit,
    } = useForm(registerSuccess, RegisterValidate);

    // useEffect(() => {
    //     if (JSON.stringify(errors) === JSON.stringify({}) && isSubmitting) {
    //         const userValue = {...values}
    //         createNewUser(userValue)
    //         if (getCurrentUserId() !== null) {
    //             navigate("/account");
    //             props.setIsLoggedIn(true)

    //             // need reload to close modal - need to investigate further
    //             window.location.reload();          
    //         } else {
    //             props.setIsLoggedIn(false)
    //         }
    //     }
    // }, [registering])

    return (
        <dialog className='login-dialog' id='register-dialog'>
            <article>
                <a href="#close" aria-label="Close" class="close" data-target="register-dialog" onClick={props.toggleModal}/>

                <div className="login-dialog-logo" id='login-dialog-logo'>
                    <img className="login-dialog-logo-img" src={logo} alt="loop cinema logo"/>
                </div>
                <div className='login-dialog-content'>
                    <h2 className='login-dialog-content-title'>Become a Looper</h2>
                    <div className='login-dialog-content-form'>
                        <form onSubmit={handleSubmit} noValidate>
                            <label htmlFor="email">Email address *</label>
                            <input autoComplete="off" type="email" id="email" name="email" placeholder="Email address" required
                            aria-invalid={`${errors.email && 'true'}`} onChange={handleChange} value={values.email || ''} />
                            {
                                errors.email && (
                                    <p className="input-text-help input-error">{errors.email}</p>
                                )
                            }

                            <label htmlFor="password">
                                Password *
                                <input autoComplete="off" type="password" id="password" name="password" placeholder="Password" required 
                                aria-invalid={`${errors.password && 'true'}`} onChange={handleChange} value={values.password || ''} />
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

                            <label htmlFor="confirmPassword">
                                Confirm password *
                                <input autoComplete="off" type="password" id="confirmPassword" name="confirmPassword" 
                                placeholder="Password confirm" required aria-invalid={`${errors.confirmPassword && 'true'}`} 
                                onChange={handleChange} value={values.confirmPassword || ''} />
                                {
                                    errors.confirmPassword && (
                                        <p className="input-text-help input-error">{errors.confirmPassword}</p>
                                    )
                                }
                            </label>

                            <div class="grid">
                                <label htmlFor="firstName">
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

                                <label htmlFor="lastName">
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

                            <label htmlFor="phone">Phone number *</label>
                            <input autoComplete="off" type="text" id="phone" name="phone" placeholder="Phone number" required
                            aria-invalid={`${errors.phone && 'true'}`} onChange={handleChange} value={values.phone || ''} />
                            {
                                errors.phone && (
                                    <p className="input-text-help input-error">{errors.phone}</p>
                                )
                            }

                            <div class="grid">
                                <label htmlFor="dob">
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

                                <label htmlFor="postCode">
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

                            <fieldset>
                                {/* <label for="subscribe">
                                    <input type="checkbox" id="subscribe" name="subscribe" 
                                    aria-invalid={`${errors.subscribe && 'true'}`} onChange={handleChange} 
                                    value={true} />
                                    I would like to receive offers from Looper.
                                </label> */}
                                <label htmlFor="term_privacy">
                                    <input type="checkbox" id="term_privacy" name="term_privacy" disabled checked />
                                    I have read and agree to the Terms & Conditions.
                                </label>
                            </fieldset>

                            <button type="submit">Register</button>
                        </form>
                    </div>
                </div>
            </article>
        </dialog>
    )
}

export default RegisterForm