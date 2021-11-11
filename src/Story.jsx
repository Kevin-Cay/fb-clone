import React from 'react';
import './Story.css';
import { Avatar } from '@material-ui/core';

function Story({image, profileSrc, title}) {
    return (
        <div style={{backgroundImage: `url(${image})`}} className="story" >
            <Avatar size={16} sx={{ width: 24, height: 24 }} className="story_avatar" src={profileSrc} />
            <h4>{title}</h4>
        </div>
    )
}

export default Story
