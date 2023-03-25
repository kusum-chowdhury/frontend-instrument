import React from 'react'
import '../styles/Portfolio.css'
import { HiArrowLongRight } from "react-icons/hi2"

function Portfolio() {
  return (
    <div className='porfolio'>
        <p>Explore some of our most recent work</p>
        <button>Our work <HiArrowLongRight /> </button>
    </div>
  )
}

export default Portfolio