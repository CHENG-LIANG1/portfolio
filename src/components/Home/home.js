import React from 'react'
import "./home.css"
import NavigationBar from '../Nav/navbar'
function Home(){

    return(

        <>
            <div className='portfolio'>
        <div className='bold-text'> Hi, <span className='primary-text'> I'm Jiurui </span></div>
        <div className='intro-text'>I am a Multimedia Designer passionate </div>
        <div className='intro-text'>about crafting captivating visual narratives </div>
        <div className='intro-text'>and motion graphics through storytelling.</div>
    
        <button className="btn btn-2 hover-slide-right">
            <span> <a className='intro-link' href='/project'>Get to know me</a></span>
        </button>
    </div>
        </>

    )

}

export default Home