import React from 'react'
import "./home.css"
import key from "./../../images/key.jpg"

const Home = () => {
  return (
      <main className='main'>
          <img src={key} alt="bgcover" />
          <div className="main__coverbg"></div>
          <div className="main__container container">
              <div className="main__contents">
                  <h3>Buy A Home Today</h3>
                  <p>We Build Quaity and Nice Homes For Our  lients</p>
                  <button className='btn'>Contact us</button>
              </div> 
          </div>
        
          
    </main>
  )
}

export default Home