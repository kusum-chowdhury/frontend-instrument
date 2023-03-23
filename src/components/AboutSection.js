import React from 'react'
import '../styles/AboutSection.css'
import { HiArrowLongRight } from "react-icons/hi2"

function AboutSection() {
  return (
    < div className='about'>
        <p className='headline'>We build connected brand systems from vision through execution</p>
        <div className='img-text'>
            <img src='https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' alt="about" />
            <div className='text'>
             <div>As a full-service partner to the world’s most ambitious companies, we create transformational change through best-in-class digital products and communications.</div>
             <button>What we do <HiArrowLongRight/></button>
            </div>
            </div>
        <div className='img-text'>
            
            <div className='text'>
             <div>Instrument Named Among World's Most Innovative Companies in Design</div>
             <button>What we do <HiArrowLongRight/></button>
            </div>
            <img src='https://images.unsplash.com/photo-1506097425191-7ad538b29cef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGlubm92YXRpdmUlMjBkZXNpZ258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' alt="about" />
            </div>
        <div/>
    </div>
  )
}

export default AboutSection;