import React, { useState } from 'react'
import "./SigIn.css"
import { auth } from '../../firebase';

function SigIn() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        //some fancy firebase login shittt...
    }

    const register = e =>{
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password).then((auth)=>{
            console.log(auth);
        })
        .catch(error => alert(error.message))
        // do some fancy firebase register shitt...
    }

  return (
    <div className='login'>
        <div className="login__container">
            <h1>Sign In</h1>

            <form >
                <h5>E-mail</h5>
                <input type="text" value={email}
                onChange={e => setEmail(e.target.value)}
                />

                <h5>Password</h5>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)}
                />

                <button  type='submit' onClick={signIn}
                className='login__SignInButton'>Sign In</button>
            </form>

            <p>
                By signing-in you agree to Amazon's Condition of Use $ Sale. Please see our Privacy Notice.  Our Cookies Notice and Internet-Based Ads Notice.
            </p>

            <button onClick={register} className='login__registerButton'> Create your amazone account</button>
        </div>
    </div>
  )
}

export default SigIn