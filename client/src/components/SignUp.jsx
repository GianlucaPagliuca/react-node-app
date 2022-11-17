import React, { useState } from 'react';
import './SignUp.css';

const SignUp = () => {
    const [login, setLogin] = useState(false);
    let ChangeToLogin = () => {
        setLogin(!login);
    }
    return(
        <div>
            <form method='POST' action='Submit-Form'>
                <input 
                    type='email'
                    name='Email'
                    placeholder='Email'
                />
                <input 
                    type='password'
                    name='Password'
                    placeholder='Password'
                />
                <button 
                    type='submit'
                    >{login ? 'Log in' : 'Sign up'}</button>
                <p 
                    className='SigninText'
                    onClick={ChangeToLogin}
                >{!login ? 'Already have an account? Click here to sign in.' : 'Click here to Sign up.'}</p>
            </form>
        </div>
    );
}

export default SignUp;