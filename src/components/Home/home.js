import React from 'react'
import "./home.css";
import ProjectCard from "./projectCard";
import animalUrl from '../../assets/animal.png'
import $ from 'jquery';
function Home(){

  const scrollToProjects = () => {
    let targetOffset = $('#projects').offset().top;
    $('html, body').animate({scrollTop: targetOffset}, 1000);
  }

  return(

    <div className='portfolio-container'>
      <div className='portfolio'>
        <div className='bold-text'> Hi, <span className='primary-text'> I'm Jiurui </span></div>
        <div className='intro-text'>I am a Multimedia Designer passionate </div>
        <div className='intro-text'>about crafting captivating visual narratives </div>
        <div className='intro-text'>and motion graphics through storytelling.</div>
    
        <button className="btn btn-2 hover-slide-right" onClick={scrollToProjects}>
            <span className='intro-link'> Get to know me </span>
        </button>
      </div>

      <div className='project-container' id={'projects'}>

        <div>
          <div className={'card-list'}>
            <ProjectCard image={animalUrl} title={'Animal'} description={'This is an Animal'}/>
            <ProjectCard image={animalUrl} title={'Animal'} description={'This is an Animal'}/>
          </div>

          <div className={'card-list'}>
            <ProjectCard image={animalUrl} title={'Animal'} description={'This is an Animal'}/>
            <ProjectCard image={animalUrl} title={'Animal'} description={'This is an Animal'}/>
          </div>
        </div>

      </div>
    </div>

  )

}

export default Home