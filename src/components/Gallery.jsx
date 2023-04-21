import React from "react";
import GalleryPanel from "./gallery/GalleryPanel";
import "../styles/gallery.css"
import FullGallery from "./gallery/FullGallery";
import { useInView } from "react-intersection-observer";

export default function Gallery (props) {

    const [activePanel, setActivePanel] = React.useState(1)
    const [prevActivePanel, setPrevActivePanel] = React.useState(1)
    const [fullGallery, setFullGallery] = React.useState(false)
    const [renderFullGallery, setRenderFullGallery] = React.useState(false)
    const [startClosingGallery, setStartClosingGallery] = React.useState(false)
    const [visible, setVisible] = React.useState(false)
    const { ref, inView } = useInView();

    const accordion = React.useRef()

    React.useEffect(()=>{
        if (inView){setVisible(true)}
        props.setVisibleSections(prev=>({
            ...prev,
            gallery:inView
        }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[inView])

    function expandGallery() {
        accordion.current.scrollIntoView({block:"center"})
        setFullGallery(true)
        setTimeout(() => {
            setRenderFullGallery(true)
        }, 1000);
    }

    function closeGallery() {
        setStartClosingGallery(true)
        setTimeout(() => {
            setFullGallery(false)
            setRenderFullGallery(false)
            setStartClosingGallery(false)
        }, 500);
    }

    return (
        <>
        <section ref={ref} id="gallery" className={`${fullGallery ? "full" : ""} ${renderFullGallery ? "rendered" : ""}`}>
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
                    visible={visible}
                />
                <GalleryPanel 
                    id={2}
                    theme="livery"
                    active={activePanel}
                    description=""
                    setActivePanel={setActivePanel}
                    setPrevActivePanel={setPrevActivePanel}
                    prevActivePanel={prevActivePanel}
                    visible={visible}
                />
                <GalleryPanel 
                    id={3}
                    theme="kitchen"
                    active={activePanel}
                    description=""
                    setActivePanel={setActivePanel}
                    setPrevActivePanel={setPrevActivePanel}
                    prevActivePanel={prevActivePanel}
                    visible={visible}
                />
                <GalleryPanel 
                    id={4}
                    theme="bedroom"
                    active={activePanel}
                    description=""
                    setActivePanel={setActivePanel}
                    setPrevActivePanel={setPrevActivePanel}
                    prevActivePanel={prevActivePanel}
                    visible={visible}
                />
                <div className={`full-gallery-wrapper 
                                ${fullGallery ? 'animate' : ''} 
                                ${renderFullGallery ? 'rendered' : ''}`}>
                    <div onClick={expandGallery} className={`panel full-gallery-button ${visible ? 'appear' : ''}`}>
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
            <FullGallery startClosingGallery={startClosingGallery} closeGallery={closeGallery}/>}
        </section>
        {renderFullGallery && <div className={`gallery-filler ${startClosingGallery ? "revert" : ""}`}></div>}</>
    )
}