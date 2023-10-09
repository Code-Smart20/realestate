import React, { useState } from 'react'
import "./profile.css"
import { FcHome } from "react-icons/fc"
import { Link, useNavigate } from 'react-router-dom'
import { getAuth } from 'firebase/auth'


const Profile = () => {
    const auth = getAuth();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "Nwachukwu",
        email: "bldrnwagod@gmail.com"
    });

    //destructuring formData
    const { name, email } = formData;

    // logout function
    function handleLogout() {
        auth.signOut();
        navigate("/")
    }
    
    return (
      <section>
            
        <div className='profile'>
            <h2>My profile</h2>

            <div className="profile__container container">
                <form>
                    <input className="form__input" id="name" type="text" value={name} disabled />
                    <input className='form__input' type="email" value={email} disabled />

                    <div className="form__edit">
                            <p className='form__edit-change'>Do want to change your Name?
                                <span> Edit</span>
                            </p>

                        <p className='logout' onClick={handleLogout}>Sign Out</p>
                    </div>
                 </form>
                    <button className="btn form__input" type='submit'>
                        <Link to="/create_listing">
                            <FcHome className='house__icon' />
                            Sell or rent your Home
                        </Link>
                      
                    </button>  
            </div>
        </div>
            
    </section >
  )
}

export default Profile