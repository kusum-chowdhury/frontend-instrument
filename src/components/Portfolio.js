import React from 'react'
import '../styles/Portfolio.css'
import { HiArrowLongRight } from "react-icons/hi2"

function Portfolio() {
  return (
    <div className='porfolio'>
        <p>Explore some of our most recent work</p>
        <button>Our work <HiArrowLongRight /> </button>
        <div className='portfolio-img-text'>
          <div className='box'>
          <img src='https://images.unsplash.com/photo-1549924231-f129b911e442?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' />
          <div className='subtext-portfolio'>
            <p className='co-name'>Eames Institute</p>
            <div>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
          </div>
          </div>
          <div className='box'>
          <img src='https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80' />
          <div className='subtext-portfolio'>
            <p className='co-name'>Eames Institute</p>
            <div>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Portfolio