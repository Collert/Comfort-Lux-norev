import React from "react";

export default function GalleryPanel (props) {

    const dictionary = {
        "bathroom":{
            icon:"shower",
            title:"Łazienki",
            backgroundImg:"bathrooms-img",
            description:"Ulepsz swoją przestrzeń, odśwież swój styl i popraw swoją codzienną rutynę"
        },
        "kitchen":{
            icon:"kitchen",
            title:"Kuchnie",
            backgroundImg:"kitchens-img",
            description:"Zmodernizuj swój projekt, zmodernizuj swoje urządzenia i popraw swoje doznania związane z gotowaniem i rozrywką"
        },
        "livery":{
            icon:"chair",
            title:"Salony",
            backgroundImg:"living-img",
            description:"Ulepsz swój układ, odśwież wystrój i popraw swój komfort i rozrywkę"
        },
        "bedroom":{
            icon:"bed",
            title:"Sypialnie",
            backgroundImg:"bedrooms-img",
            description:"Odmień swoją przestrzeń, odśwież swój styl i zwiększ swój komfort i relaks"
        },
    }

    function handleClick () {
        props.setActivePanel(props.id)
        setTimeout(() => {
            props.setPrevActivePanel(props.id)
        }, 600);
    }

    return (
        <div onClick={handleClick} className={`panel 
                                            ${props.active === props.id ? "active-panel" : ""} 
                                            ${props.prevActivePanel === props.id ? "was-active" : ""} 
                                            ${dictionary[props.theme].backgroundImg}
                                            ${props.visible ? "appear" : ""}`}
            >
            <div className="panel-content-wrapper">
                <button
                    className="accordion-trigger"
                    aria-controls={`panel${props.id}-content`}
                    aria-expanded={props.active === props.id}
                    >
                    <span className="material-symbols-outlined accordion-icon">{dictionary[props.theme].icon}</span>
                </button>
                
                {(props.active === props.id || props.prevActivePanel === props.id) &&
                <div 
                className="panel-content" 
                id={`panel${props.id}-content`}
                aria-labelledby={`panel${props.id}-heading`}
                role="region"
                >
                    <h2 className="panel-title" id={`panel${props.id}-title`}>{dictionary[props.theme].title}</h2>
                    <p>{dictionary[props.theme].description}</p>
                </div>}
            </div>
        </div>
    )
}