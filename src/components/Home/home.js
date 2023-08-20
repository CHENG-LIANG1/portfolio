import React from 'react'
import "./home.css"
function Home(){

  return(

    <div className='portfolio-container'>
      <div className='portfolio'>
        <div className='bold-text'> Hi, <span className='primary-text'> I'm Jiurui </span></div>
        <div className='intro-text'>I am a Multimedia Designer passionate </div>
        <div className='intro-text'>about crafting captivating visual narratives </div>
        <div className='intro-text'>and motion graphics through storytelling.</div>
    
        <button className="btn btn-2 hover-slide-right">
            <span className='intro-link'> Get to know me </span>
        </button>
      </div>

      <div className='project-container'>
        
      </div>
    </div>

  )

}

export default Home