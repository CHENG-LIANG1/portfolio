import React, {useEffect} from 'react'
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
import Bus from "../../eventBus";
import {libContent} from "./projectContent";

function Home(){

  const scrollToProjects = () => {
    let targetOffset = $('#projects').offset().top;
    $('html, body').animate({scrollTop: targetOffset}, 1000);
  }




  useEffect(() => {
    Bus.addListener('toFooter', (count)=> {
      let targetOffset = $('#footer').offset().top;
      $('html, body').animate({scrollTop: targetOffset}, 1000);
    });

  }, [])


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
            <ProjectCard image={animalUrl} title={'TASMANIAN DEVIL'} description={'Zoos Victoria endangered species call to action motion graphic'}/>
            <ProjectCard image={appUrl} title={'iQingbaijiang 2023'} description={'A motion graphic video for the iQingbaijiang app update'}/>
          </div>

          <div className={'card-list'}>
            <ProjectCard image={libUrl} title={'MATHESON LIBRARY'} description={'A creative library introduction for social media promotion'}
            child={libContent}
            />
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

          <div className={'footer-container'} id={'footer'}>
            <div className={'contact-footer'}>
              <div className={'footer-text'}> Please email me to view my CV </div>
              <div className={'email'}> JaneRayDesign@outlook.com </div>
              <div className={'footer-text'}> I am always up for a cup of tea:) </div>
              <div className={'icon-container'}>
                <div className={'icon-wrapper'} onClick={() => {
                  window.open('https://www.linkedin.com/in/久瑞-彭-1a3677160', "_blank")
                }}><img src={linkedInIcon}/></div>
                <div className={'icon-wrapper'} onClick={() => {
                  window.open('https://www.youtube.com/channel/UCU7tx0T3R3lrP9rqioBTikg', "_blank")
                }}><img src={youtubeIcon}/></div>
                <div className={'icon-wrapper'} onClick={() => {
                  window.open('https://medium.com/@JiuruiPeng', "_blank")
                }}><img src={mediumIcon}/></div>
                <div className={'icon-wrapper'} onClick={() => {
                  window.open('https://www.behance.net/jiuruipeng1', "_blank")
                }}><img src={behanceIcon}/></div>
              </div>
            </div>

          </div>
        </div>



      </div>



      <hr />

      <div className={'credit-container'}>I acknowledge the use of ChatGPT (https://chat.openai.com/) to refine my wording and grammar. The prompts used include:
        proofread
        check my grammar</div>

    </div>

  )

}

export default Home