import React, { useState } from 'react';
import './authentication.css';
import key from "./../../images/key.jpg";
import { Link } from 'react-router-dom';
import { getAuth, sendPasswordResetEmail} from 'firebase/auth';
import { toast } from 'react-toastify';

const ForgotPass = () => {
  
  const [Email, setEmail] = useState("");

  async function handleForgotPassword(e){
    e.preventDefault();
    try {
      const auth = getAuth()

      await sendPasswordResetEmail(auth, Email)  
    } catch (error) {
      toast.error("Send not Succesfull")
    }

  }

  return (
    <section>
      <div className="signin">
        <h2>Forgot Password</h2>

        <div className="authentication__container container">
          <div className="authentication__img">
            <img className='authentication__key' src={key} alt="login key" />
          </div>
          <div className="authentication__form">
            <form onSubmit={handleForgotPassword}>
              <input onChange={(e) => { setEmail(e.target.value) }} className='form__input' type="email" placeholder='Email Adress' />
          
              <div className="redirection">
                <p>Just Remembered your password <Link className='reg__color' to="/register">SignIn Instead</Link></p>
                <Link className='forgot__pass' to="/signin">SignIn</Link>
              </div>

              <button className=' btn btn-primary form__input' type='submit'>Send Reset Password</button>
              <p>OR</p>

              <button className='btn__primary form__input' type="button">Continue With Google</button>
            </form>
          </div>
        </div>
      </div>
    </section>


  )
  
}

export default ForgotPass
