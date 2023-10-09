import React, { useState } from 'react'
import "./createlisting.css"

const CreateListing = () => {

    const [formstyle, changeFormStyle] = useState("rent")

    function handlechange() {
        console.log("hello")
    }
  return (
    <main className='listing'>
        <section>
              <h2>create A listing</h2>  

              <form>
                  <h3>sell/Rent</h3>

                  <div className="listing__buttons">
                      <button className='btn'>Sell</button>
                      <button className='btn'>Buy</button>
                  </div>   

                  <h3>Name</h3>
                  <input className='form__input' type="text"
                      placeholder='Name' maxLength={32} minLength={10} required
                  />

                  <div className="listing__numbers">
                      <div className="listing__numbers-bed">
                          <h3>Beds</h3>
                          <input className='form__input numbers' type="number"  id="bedrooms" min="1" max="50" required/>
                      </div>

                      <div className="listing__numbers-bed">
                          <h3>Baths</h3>
                          <input className='form__input numbers' type="number"  id="bedrooms" min="1" max="50" required/>
                      </div>
                  </div>   

              </form>
           
              
        </section>
      
    </main>
  )
}

export default CreateListing
