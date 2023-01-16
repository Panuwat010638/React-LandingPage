import React from 'react'
import "./Banner.css"


function Banner() {
  return (
    <div className='BG-banner' id='Home'>
        <div className='contianer'>
          <div className='BG-con'>
            <div>
              <h3>Hi,My name is</h3>
              <h1>PANUWAT KRITSANAMARA</h1>
              <h3>Software Developer</h3> 
            </div>
            <div className='main-button'>
              <ul className='button-banner'>
                <li><a href='#About'>AboutME</a></li>
                <li><a href='#Project'>Project</a></li>
                <li><a href='#Contact'>Contact US</a></li>
              </ul>
            </div>
            
          </div>
          
        </div>
    </div>
  )
}

export default Banner