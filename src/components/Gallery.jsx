import React from "react";
import GalleryPanel from "./gallery/GalleryPanel";
import "../styles/gallery.css"
import FullGallery from "./gallery/FullGallery";

export default function Gallery () {

    const [activePanel, setActivePanel] = React.useState(1)
    const [prevActivePanel, setPrevActivePanel] = React.useState(1)
    const [fullGallery, setFullGallery] = React.useState(false)
    const [renderFullGallery, setRenderFullGallery] = React.useState(false)

    const accordion = React.useRef()

    function expandGallery() {
        accordion.current.scrollIntoView({block:"center"})
        setFullGallery(true)
        setTimeout(() => {
            setRenderFullGallery(true)
        }, 1000);
    }

    function closeGallery() {
        setFullGallery(false)
        setRenderFullGallery(false)
    }

    return (
        <>
        <section id="gallery" className={`${fullGallery ? 'full' : ''} ${renderFullGallery ? 'rendered' : ''}`}>
            {!renderFullGallery ? 

            <div ref={accordion} className="accordion">
                <GalleryPanel 
                    id={1}
                    theme="bathroom"
                    active={activePanel}
                    description=""
                    setActivePanel={setActivePanel}
                    setPrevActivePanel={setPrevActivePanel}
                    prevActivePanel={prevActivePanel}
                />
                <GalleryPanel 
                    id={2}
                    theme="livery"
                    active={activePanel}
                    description=""
                    setActivePanel={setActivePanel}
                    setPrevActivePanel={setPrevActivePanel}
                    prevActivePanel={prevActivePanel}
                />
                <GalleryPanel 
                    id={3}
                    theme="kitchen"
                    active={activePanel}
                    description=""
                    setActivePanel={setActivePanel}
                    setPrevActivePanel={setPrevActivePanel}
                    prevActivePanel={prevActivePanel}
                />
                <GalleryPanel 
                    id={4}
                    theme="bedroom"
                    active={activePanel}
                    description=""
                    setActivePanel={setActivePanel}
                    setPrevActivePanel={setPrevActivePanel}
                    prevActivePanel={prevActivePanel}
                />
                <div className={`full-gallery-wrapper ${fullGallery ? 'animate' : ''} ${renderFullGallery ? 'rendered' : ''}`}>
                    <div onClick={expandGallery} className="panel full-gallery-button">
                        <span>W</span>
                        <span>I</span>
                        <span>Ę</span>
                        <span className="material-symbols-outlined">
                            east
                        </span>
                        <span>C</span>
                        <span>E</span>
                        <span>J</span>
                    </div>
                </div>
            </div>
            :
            <FullGallery closeGallery={closeGallery}/>}
        </section>
        {renderFullGallery && <div className="gallery-filler"></div>}</>
    )
}