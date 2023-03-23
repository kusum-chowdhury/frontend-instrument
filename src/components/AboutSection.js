import React from 'react'
import '../styles/AboutSection.css'
import { HiArrowLongRight } from "react-icons/hi2"

function AboutSection() {
  return (
    < div className='about'>
        <p className='headline'>We build connected brand systems from vision through execution</p>
        <div className='img-text'>
            <img src='https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'/>
            <div className='text'>
             <div>As a full-service partner to the world’s most ambitious companies, we create transformational change through best-in-class digital products and communications.</div>
             <button>What we do <HiArrowLongRight/></button>
            </div>
        </div>
    </div>
  )
}

export default AboutSection