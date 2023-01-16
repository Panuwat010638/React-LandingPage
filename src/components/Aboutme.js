import React from 'react'
import "./Aboutme.css"
import { FaLinkedinIn,FaInstagram,FaLine,FaFacebook,FaGithub} from "react-icons/fa";


function Aboutme() {

  return (
    <div className='BG-about' id='About'>
      <div className='contianer'>
        <div className='BG-about-con'>
          <div className='blockaboutme'>
            <div>
              <div className='shadowabout'>
                <div className='about-img'>
                  <img src='https://scontent.futp2-1.fna.fbcdn.net/v/t1.15752-9/324869594_6152260224841221_8224708123544790159_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeGa1QGvDOrUiXp5jwO650mVGq3B_dwNqPEarcH93A2o8YY3Q_LJjf8E645wlWBYgoc1DyFOzIPTKtD5sKluMbMQ&_nc_ohc=hHwpLz4-pNoAX8k0B0b&tn=PMH6VsMoTDaK5Mff&_nc_ht=scontent.futp2-1.fna&oh=03_AdRTojNAAnMwqfwnIl4jxxI-WDYPsq0ZxnnZ6efTLMQOeg&oe=63E877B3' alt='panuwatimg'/>
                </div>
              </div>
              <h2 className='about-h2class'>PANUWAT KRITSANAMARA</h2>
              <h3 className='about-h3class'>SOFTWARE DEVELOPER</h3>
            </div>
            <div className='about-iconclass'>
              <a href='https://www.instagram.com/make.panuwat/' target="_blank" rel="noreferrer"><h3 className='icon-instaclass'><FaInstagram/></h3></a>
              <a href='https://www.facebook.com/makenakup.zii/' target="_blank" rel="noreferrer"> <h3 className='icon-instaclass'><FaFacebook/></h3></a>
              <a href='https://line.me/ti/p/d3HLkxvNWq ' target="_blank" rel="noreferrer"><h3 className='icon-instaclass'><FaLine/></h3></a>
              <a href='https://www.linkedin.com/in/panuwat-kritsanamara-a3909425b/' target="_blank" rel="noreferrer"><h3 className='icon-instaclass'><FaLinkedinIn/></h3></a>
              <a href='https://github.com/Panuwat010638' target="_blank" rel="noreferrer"><h3 className='icon-instaclass'><FaGithub/></h3></a>
            </div>
          </div>
          <div className='info-con'>
              <h1 className='about-h1-con'>HEL<span className='info-span'>LO</span></h1>
              <h3 className='about-h3-con'>Get to know me.</h3>
              <p>
                <b className='about-B-con'>Name : </b>Panuwat Kritsanamara (ภาณุวัฒน์ กฤษณามระ)<br/>
                <b className='about-B-con'>Nickname : </b>Make (เมฆ)<br/>
                <b className='about-B-con'>Tel. : </b>083-930-5478<br/>
                <b className='about-B-con'>Email : </b>panuwatkrit001@gmail.com
              </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aboutme