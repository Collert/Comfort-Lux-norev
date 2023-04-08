import React from "react";
import GalleryPanel from "./gallery/GalleryPanel";
import "../styles/gallery.css"

export default function Gallery () {

    const [activePanel, setActivePanel] = React.useState(1)
    const [prevActivePanel, setPrevActivePanel] = React.useState(1)

    return (
        <section id="gallery">
            <div className="accordion">
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
            </div>
        </section>
    )
}