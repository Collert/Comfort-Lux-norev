import React from "react";
import Image from "./Image";

export default function FullGallery (props) {

    const [activeImage, setActiveImage] = React.useState(null)

    let images = []

    // This is a temporary solution, leave me alone lol
    for (let i = 1; i <= 14; i++) {
        let path = `./irl_examples/${i}.jpg`
        images.push(<Image key={i} isActive={false} activeImage={activeImage} expandImage={expandImage} src={path}/>)
    }

    function expandImage(e) {
        const src = e.target.src
        const position = e.target.getBoundingClientRect()
        console.log()
        setActiveImage(<Image position={position} activeImage={true} isActive={true} src={src} setActiveImage={setActiveImage}/>)
    }

    return (
        <>
            <div className={`full-gallery ${props.startClosingGallery ? "start-closing" : ""}`}>
                <nav>
                <span onClick={props.closeGallery} className="material-symbols-outlined">
                    close
                </span>
                </nav>
                <div className="gallery-content">
                    {images}
                </div>
            </div>
            {activeImage}
        </>
    )
}