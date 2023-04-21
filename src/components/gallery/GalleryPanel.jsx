import React from "react";

export default function GalleryPanel (props) {

    const dictionary = {
        "bathroom":{
            icon:"shower",
            title:"Łazienki",
            backgroundImg:"bathrooms-img"
        },
        "kitchen":{
            icon:"kitchen",
            title:"Kuchnie",
            backgroundImg:"kitchens-img"
        },
        "livery":{
            icon:"chair",
            title:"Salony",
            backgroundImg:"living-img"
        },
        "bedroom":{
            icon:"bed",
            title:"Sypialnie",
            backgroundImg:"bedrooms-img"
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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>}
            </div>
        </div>
    )
}