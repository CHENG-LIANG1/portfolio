import React from "react";

const ProjectCard = (props) => {
  const {image, title, description} = props
  return <div className={'card-container'}>
    <img src={image} alt={description}/>
    <div className={'card-title'}>{title}</div>
    <div className={'card-description'}>{description}</div>
    <div className={'read-more'}>Read more</div>
  </div>
}

export default ProjectCard;