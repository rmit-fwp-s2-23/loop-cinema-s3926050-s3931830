import '../css/components/LoginForm.css'
import logo from "../Images/logo.png"
import useLockScroll from '../CustomHooks/useLockScroll'

const LoginForm = (props) => {

    // const closeLoginModal = (event) => {
    //     props.toggleModal()
    // }
    // useLockScroll();
    return (
        <>
        <dialog className='login-dialog' id='login-dialog'>
            <article>
                <a href="#close" aria-label="Close" class="close" />
                {/* <a href="#close" aria-label="Close" class="close" onClick={closeLoginModal}/> */}

                <div className="login-dialog-logo">
                    <img className="login-dialog-logo-img" src={logo} alt="loop cinema logo"/>
                </div>
                <div className='login-dialog-content'>
                    <h2 className='login-dialog-content-title'>Login to Looper</h2>
                    <div className='login-dialog-content-form'>
                        <form>
                            <label for="username">Email address</label>
                            <input type="email" id="username" name="username" placeholder="Email address" required />

                            <label for="password">Password</label>
                            <input type="email" id="password" name="password" placeholder="Password" required />

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