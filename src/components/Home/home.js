import React from 'react'
import "./home.css";
import ProjectCard from "./projectCard";
import animalUrl from '../../assets/animal.png'
import appUrl from '../../assets/app.jpg'
import interviewUrl from '../../assets/interview.jpg'
import libUrl from '../../assets/lib.jpg'
import morningUrl from '../../assets/morning.jpg'
import toyUrl from '../../assets/toy.jpg'
import shoeUrl from '../../assets/reebok.jpg'
import anotherUrl from '../../assets/正反打1比1.jpg'
import youtubeIcon from '../../assets/ytb.png'
import linkedInIcon from '../../assets/linkedin.png'
import mediumIcon from '../../assets/medium.png'
import behanceIcon from '../../assets/behance.png'
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


        <div className={'project-div'} style={{display: 'flex', flexDirection: 'column', gap: 16, justifyContent: 'space-between',}}>
          <div className={'featured-title'}>Featured works</div>
          <div className={'card-list'}>
            <ProjectCard image={animalUrl} title={'TASMANIAN DEVIL'} description={'Zoos Victoria endangered species motion graphic'}/>
            <ProjectCard image={appUrl} title={'iQingbaijiang 2023'} description={'A motion graphic video for the iQingbaijiang app update'}/>
          </div>

          <div className={'card-list'}>
            <ProjectCard image={libUrl} title={'MATHESON LIBRARY'} description={'A creative library introduction for social media promotion'}/>
            <ProjectCard image={shoeUrl} title={'HERITAGE RUN'} description={'Reebok Olympic concept sneaker motion graphic advert'}/>
          </div>

          <div className={'card-list'}>
            <ProjectCard image={toyUrl} title={'FUTURE CITY 2070'} description={'A dynamic bus shelter advert for an original children toy kit'}/>
            <ProjectCard image={morningUrl} title={'RANGER'} description={'A self-guided morning ritual filming'}/>
          </div>

          <div className={'card-list'}>
            <ProjectCard image={interviewUrl} title={'CULTROO'} description={'A graduation project documentary'}/>
            <ProjectCard image={anotherUrl} title={'DON’T TRY TO BUY ME OFF'} description={'A film dialogue parody'}/>
          </div>
        </div>

      </div>

      <div className={'footer-container'}>
        <div className={'contact-footer'}>
          <div className={'footer-text'}> Reach me at </div>
          <div className={'email'}> jiurui123@gmail.com </div>
          <div className={'footer-text'}> Online 24/7 </div>
          <div className={'icon-container'}>
            <div className={'icon-wrapper'}><img src={linkedInIcon}/></div>
            <div className={'icon-wrapper'}><img src={youtubeIcon}/></div>
            <div className={'icon-wrapper'}><img src={mediumIcon}/></div>
            <div className={'icon-wrapper'}><img src={behanceIcon}/></div>
          </div>
        </div>

      </div>

    </div>

  )

}

export default Home