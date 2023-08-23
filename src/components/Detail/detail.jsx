import React from "react";
import './detail.css';
import avatarUrl from '../../assets/avatar.jpg'
import linkedInIcon from "../../assets/linkedin.png";
import youtubeIcon from "../../assets/ytb.png";
import mediumIcon from "../../assets/medium.png";
import behanceIcon from "../../assets/behance.png";
const Detail = () => {
  return (
    <div>
      <div className={'about-container'}>
        <div className={'about'}>
          <div className={'avatar'}> <img src={avatarUrl} /></div>


          <div className={'about-text'}>
            <div className={'bold-text'}>Hi there again!  I'm Jiurui </div>
            <br />
            <div className='about-text'>I am a multimedia designer specialising in Motion Graphics and Photomedia.</div>
            <br />
            <div className='about-text'>My passion and dedication revolve around the harmonious blend of emerging media forms, seeking to enrich communication by exploring their innovative potential.  I hope to venture beyond the conventional and explore the limitless boundaries of innovation within the multimedia realm. Based on my enthusiasm for motion graphics and photography, I apply these dynamic storytelling tools to capture inspiring moments and creative immersive visual narratives.</div>
            <br />
            <div className='about-text'>Throughout this creative journey, I uphold the unwavering value of authenticity.   I believe that genuine stories resonate the most profoundly. I maintain a steadfast commitment to innovative approaches, constantly exploring the envelope of what's possible in multimedia design.</div>
            <br />
            <div className={'about-text'}>My work revolves around the User-Centered Design principle, which ensures that my crafted visual experience is visually engaging and meaningful, connecting with the audience on a profound level.</div>
          </div>

        </div>
      </div>
      <div className={'footer-container about-me'} id={'footer'}>
        <div className={'contact-footer'}>
          <div className={'footer-text'}> Reach me at </div>
          <div className={'email'}> jiurui123@gmail.com </div>
          <div className={'footer-text'}> Please email me to view my CV </div>
          <div className={'footer-text'}> I am always up for a cup of tea:) </div>
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

export default Detail;