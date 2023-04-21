import React from "react";

export default function Image(props) {
    return (
        <div className="gallery-image-wrapper">
            <img className="gallery-image" alt="illustration" src={props.src}/>
        </div>
    )
}