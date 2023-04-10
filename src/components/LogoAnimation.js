import React from 'react'
import { useEffect } from 'react';
import '../styles/LogoAnimation.css'

function LogoAnimation() {
    useEffect(() => {
        const logoBoxes = document.querySelectorAll('.logo');
        let activeIndex = 0;
    
        setInterval(() => {
          logoBoxes[activeIndex].classList.remove('active');
          activeIndex = (activeIndex + 1) % logoBoxes.length;
          logoBoxes[activeIndex].classList.add('active');
        }, 1000);
      }, []);
    

  return (
 


    <div className='logos'>
        <div className='logobox'>
            <div className='img logo active'>
                
            <img src='https://images.prismic.io/instrument-v5/2bcc43c1-4e9f-4eea-9f9d-5110882ea43f_levis.png?auto=compress,format&w=640&dpr=1' />
            <img src='https://images.prismic.io/instrument-v5/94dc684b-ad1d-4edc-a9a7-8c5874451a1e_youtube.png?auto=compress,format&w=640&dpr=1' />
            <img src='https://images.prismic.io/instrument-v5/ef25fd23-41ed-427b-b0d4-cd1164b835fe_one-medical.png?auto=compress,format&w=640&dpr=1' />
            </div>
            </div>
            <div  className='logobox'>
            <div className='img logo'>
                
                <img src='https://images.prismic.io/instrument-v5/0111080c-93e6-4eec-bdbf-23d15c792dbe_new-knowledge.png?auto=compress,format&w=640&dpr=1' />
                <img src='https://images.prismic.io/instrument-v5/979a9dff-e6a1-4a2a-8b52-8fd931d66199_netflix.png?auto=compress,format&w=640&dpr=1' />
                <img src='https://images.prismic.io/instrument-v5/76527759-efe2-4b12-8708-2e1a54e13960_dwell.png?auto=compress,format&w=640&dpr=1' />
                </div>
            </div>
            <div className='logobox'>
            <div className='img logo'>
                
                <img src='https://images.prismic.io/instrument-v5/6b8ceeea-94fb-4f22-94eb-7a9c8856601f_xbox.png?auto=compress,format&w=640&dpr=1' />
                <img src='https://images.prismic.io/instrument-v5/a00f63c1-2925-4338-9bd7-33d84ecfddc0_facebook.png?auto=compress,format&w=640&dpr=1' />
                <img src='https://images.prismic.io/instrument-v5/1931b346-2c71-417f-8b67-eda4d7cad686_patagonia.png?auto=compress,format&w=640&dpr=1' />
                </div>
            </div>
            </div>
   
  )
}

export default LogoAnimation