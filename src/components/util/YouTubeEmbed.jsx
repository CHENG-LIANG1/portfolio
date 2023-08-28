import React from "react";

import './styles.css'
import ReactPlayer from "react-player";
const YoutubeEmbed = ({ embedId }) => (
  <ReactPlayer width={'100%'} height={'720px'} url={`https://www.youtube.com/watch?v=${embedId}`} />

);


export default YoutubeEmbed;

export const ARROW = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M3 19h18a1.002 1.002 0 0 0 .823-1.569l-9-13c-.373-.539-1.271-.539-1.645 0l-9 13A.999.999 0 0 0 3 19z"></path></svg>
