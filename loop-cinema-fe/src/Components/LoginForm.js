import '../css/components/LoginForm.css'
import logo from "../Images/logo.png"
import useForm from '../CustomHooks/useForm'
import LoginValidate from '../Validations/LoginValidate'

const LoginForm = (props) => {
    // test login done
    const login = () => {
        console.log("Logged in");
    }

    const {
        values,
        errors,
        handleChange,
        handleSubmit,
    } = useForm(login, LoginValidate);

    return (
        <>
        <dialog className='login-dialog' id='login-dialog'>
            <article>
                <a href="#close" aria-label="Close" class="close" data-target="login-dialog" onClick={props.toggleModal}/>

                <div className="login-dialog-logo">
                    <img className="login-dialog-logo-img" src={logo} alt="loop cinema logo"/>
                </div>
                <div className='login-dialog-content'>
                    <h2 className='login-dialog-content-title'>Login to Looper</h2>
                    <div className='login-dialog-content-form'>
                        <form onSubmit={handleSubmit} noValidate>
                            <label for="username">Email address</label>
                            <input autoComplete="off" type="email" id="username" name="username" placeholder="Email address" required
                            aria-invalid={`${errors.username && 'true'}`} onChange={handleChange} value={values.username || ''} />
                            {
                                errors.username && (
                                    <p className="input-error">{errors.username}</p>
                                )
                            }

                            <label for="password">Password</label>
                            <input autoComplete="off" type="email" id="password" name="password" placeholder="Password" required 
                            aria-invalid={`${errors.password && 'true'}`} onChange={handleChange} value={values.password || ''} />
                            {
                                errors.password && (
                                    <p className="input-error">{errors.password}</p>
                                )
                            }

                            <button type="submit">Login</button>
                        </form>
                    </div>
                    <div className='login-dialog-content-note'>
                        <span className='login-dialog-content-note-text'>Having trouble logging in?</span>
                        <div className="login-dialog-content-note-buttons">
                            <button className="header-profile-button">
                                <span className="header-profile-button-text">Reset Password</span>
                            </button>
                            <span className='login-dialog-content-note-text'>or</span>
                            <button className="header-profile-button">
                                <span className="header-profile-button-text">Register Looper</span>
                            </button>
                        </div>
                    </div>
                </div>
            </article>
        </dialog>
            
        </>
    )
}

export default LoginForm