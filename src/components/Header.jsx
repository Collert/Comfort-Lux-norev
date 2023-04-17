import React from "react";

export default function Header (props) {

    const [onTop, setOnTop] = React.useState(true)

    React.useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            window.scrollY === 0 ? setOnTop(true) : setOnTop(false)
        })
    },[])

    return (
        <header className={!onTop ? "scrolled" : ""}>
            <div className="logo">
                <span></span>
            </div>
            <div className="divider">
                <svg id="divider-svg" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 258.25" width='50px' height='50px'>
                <rect className="cls-1" x="0" y="0" width="800" height="68.25" rx="34.12" ry="34.12"/>
                <rect className="cls-1" x="50" y="189.25" width="700" height="69" rx="34.5" ry="34.5"/>
                </svg>
            </div>
            <div className="menu">
                <div><a href="#hero" className="menu-item active">STRONA GŁÓWNA</a></div>
                <div><a href="#hero" className="menu-item">O NAS</a></div>
                <div><a href="#hero" className="menu-item">ZAKRES USŁUG</a></div>
                <div><a href="#gallery" className="menu-item">PORTFOLIO</a></div>
                <div><a href="#gallery" className="menu-item">DLA CZEGO MY?</a></div>
                <div><a href="#gallery" className="menu-item">OPINIE KLIENTÓW</a></div>
                <div><a href="#gallery" className="menu-item">KONTAKT</a></div>
            </div>
        </header>
    )
}