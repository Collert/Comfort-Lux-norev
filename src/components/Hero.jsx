import React from "react";
import { useInView } from "react-intersection-observer";

export default function Hero (props) {

    const { ref, inView } = useInView();

    React.useEffect(()=>{
        props.setVisibleSections(prev=>({
            ...prev,
            hero:inView
        }))
    },[inView, props])

    return (
        <section ref={ref} id="hero" className="hero">
            <div className="wrapper">
                <div>
                    <h1>Wykończenia wnętrz</h1>
                    <p>
                        Wykonujemy kompleksowe remonty domów, mieszkań, biur oraz prace wykończeniowe pod klucz.
                        Dzięki bogatemu doświadczeniu jesteśmy w stanie wykonać każde zlecenie. Poznaj nas lepiej!
                    </p>
                    <a href="#contact" className="accent">ZAMÓW DARMOWĄ WYCENĘ</a>
                </div>
            </div>
        </section>
    )
}