/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'
import './Widgets.css'

function Widgets() {
    return (
        // <iframe 
        // src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fchoco.real.gt%2F&tabs=timeline&width=250&height=1000&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
        // width="250" 
        // height="1000px" 
        // style={{border:"none",overflow:"hidden"}} 
        // scrolling="no" 
        // frameborder="0" 
        // allowfullscreen="true" 
        // allow="encrypted-media"></iframe>
        <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FMeta&tabs=timeline&width=250&height=750&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=411040007092747" 
        width="250" 
        height="750" 
        style={{border:"none",overflow:"hidden"}} 
        scrolling="no" 
        frameBorder="0" 
        allowFullscreen="true" 
        className="widgetStyle"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
    )
}

export default Widgets
