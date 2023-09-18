import React, { useState } from 'react'
import './authentication.css'

import key from "./../../images/key.jpg";
import { Link } from 'react-router-dom';


const ForgotPass = () => {
  
  const [Email, setEmail] = useState("");

  const handleSignin = (e) => {
    e.preventDefault();
    console.log(Email);
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
            <form onSubmit={handleSignin}>
              <input onChange={(e) => { setEmail(e.target.value) }} className='form__input' type="email" placeholder='Email Adress' />
          
              <div className="redirection">
                <p>Don't have an Account? <Link className='reg__color' to="/register">Register</Link></p>
                <Link className='forgot__pass' to="/forgotpass">Forgot Password</Link>
              </div>

              <button className=' btn btn-primary form__input' type='submit'>Submit</button>
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
