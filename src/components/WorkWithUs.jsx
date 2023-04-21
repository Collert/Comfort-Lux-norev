import React from "react";
import "../styles/workwithus.css"
import { useInView } from "react-intersection-observer";

export default function WorkWithUs(props) {

    const [visible, setVisible] = React.useState(false)

    const { ref, inView } = useInView();

    React.useEffect(()=>{
        if (inView) {setVisible(true)}
        props.setVisibleSections(prev=>({
            ...prev,
            workWithUs:inView
        }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[inView])

    return (
        <section ref={ref} className={visible ? 'animate' : ''} id="timeline">
            <h2>współpraca</h2>
            <div id="left-points">
                <div className="section">
                    <h3>Wyjeżdżamy do obiektu i wykonujemy pomiary gratis</h3>
                </div>
                <div className="section"></div>
                <div className="section">
                    <h3>Po akceptacji podpisujemy umowę</h3>
                </div>
                <div className="section"></div>
                <div className="section">
                    <h3>Sprzątamy obiekt i przekazujemy Tobie</h3>
                </div>
            </div>
            <div id="line">
                <div className="section">
                    <span className="line-part"></span>
                    <div className="circle">
                        <div className="outer-circle"></div>
                        <div className="inner-circle"></div>
                    </div>
                </div>
                <div className="section">
                    <span className="line-part"></span>
                    <div className="circle">
                        <div className="outer-circle"></div>
                        <div className="inner-circle"></div>
                    </div>
                </div>
                <div className="section">
                    <span className="line-part"></span>
                    <div className="circle">
                        <div className="outer-circle"></div>
                        <div className="inner-circle"></div>
                    </div>
                </div>
                <div className="section">
                    <span className="line-part"></span>
                    <div className="circle">
                        <div className="outer-circle"></div>
                        <div className="inner-circle"></div>
                    </div>
                </div>
                <div className="section">
                    <span className="line-part"></span>
                    <div className="circle">
                        <div className="outer-circle"></div>
                        <div className="inner-circle"></div>
                    </div>
                </div>
            </div>
            <div id="right-points">
                <div className="section"></div>
                <div className="section">
                    <h3>Sporządzamy kosztorys</h3>
                </div>
                <div className="section"></div>
                <div className="section">
                    <h3>Wykonujemy prace wykończeniowe w ustalonym terminie, rozliczamy się zawsze za faktycznie
                        wykonane usługi, bez pobierania zaliczek za robotę</h3>
                </div>
                <div className="section"></div>
            </div>
            <h2>z nami</h2>
        </section>
    )
}