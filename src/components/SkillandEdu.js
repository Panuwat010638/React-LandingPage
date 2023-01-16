import React from 'react'
import "./SkillandEdu.css"
import { useState } from 'react';

function SkillandEdu() {
    const [ToggleS,setToggleS]=useState(1);
    const ToggleTab = (index)=>{
    setToggleS(index);
     };
  return (
    <div className='BG-SkillandEdu'>
        <div className='contianer'>
            <div className='BG-SkillandEdu-con'>
                <div className='TagHead'>
                    <button className={ToggleS === 1 ? "tabs active-tabs" : "tabs"}onClick={() => ToggleTab(1)}>Skills</button>
                    <button className={ToggleS === 2 ? "tabs active-tabs" : "tabs"}onClick={() => ToggleTab(2)}>Education</button>
                </div>
                <div className='about-RHalfCon-tabs'>
                    <div className={ToggleS === 1 ? "about-RHalfCon  active-content" : "about-RHalfCon"}>
                        <h2>Skills</h2><hr />
                        <p>
                            <b className='about-RHalfBclass'>Frontend : </b>HTML5 ,CSS3 ,JavaScriptES6 ,React.js ,Bootstrap5<br/>
                            <b className='about-RHalfBclass'>Database : </b>MongoDB ,MySQL<br/>
                            <b className='about-RHalfBclass'>Backend : </b>Node.js & Express.js <br/>
                            <b className='about-RHalfBclass'>programming languages : </b>C/C++ ,Python <br/>
                            <b className='about-RHalfBclass'>Other : </b>Git/GitHub ,REST API ,IOT ,Figma ,Unity ,SketchUP
                        </p>
                    </div>
                    <div className={ToggleS === 2 ? "about-RHalfCon  active-content" : "about-RHalfCon"}>
                        <h2>Education</h2><hr />
                        <p>
                            <b className='about-RHalfBclass'>KASETSART UNIVERSITY SRIRACHA CAMPUS</b><br/>
                            COMPUTER ENGINEERING AND INFORMATICS | 2017-2021<br/>
                            GRADUATED WITH GPAX OF 2.42<br/>
                            <b className='about-RHalfBclass'>CHONBURI SUKKHABOT SCHOOL</b><br/>
                            SCIENCES AND MATHEMATICS PROGRAM | 2011-2013<br/>
                            GRADUATED WITH GPAX OF 2.63
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SkillandEdu