import React from "react";
import "../styles/contact.css"
import { useInView } from "react-intersection-observer";

export default function Contact (props) {

    const { ref, inView } = useInView();

    React.useEffect(()=>{
        props.setVisibleSections(prev=>({
            ...prev,
            contact:inView
        }))
    },[inView, props])

    function onSubmit(e) {
        e.preventDefault()
    }

    return (
        <section ref={ref} id="contact">
            <form onSubmit={onSubmit}>
                <h2>Umów się na<br/> bezpłatną wycenę!</h2>
                <input type="text" placeholder="Imię"/>
                <input type="tel" placeholder="Numer telefonu"/>
                <input type="email" placeholder="E-mail"/>
                <input type="text" placeholder="Okolica"/>
                <textarea placeholder="Komentarz"></textarea>
                <button className="accent">WYŚLIJ</button>
            </form>
            <div className="info">
                <img src="./branding/logo/original/logo-transparent.png" alt="logo"/>
                <h3>Сomfort Lux Sp. Z o.o.</h3>
                {/* NIP 5252804077<br/> */}
                <div className="contact-info-piece">ul. Marszałkowska 58/15, 00-545 Warszawa  <span class="material-symbols-outlined footer">place</span></div>
                <div className="contact-info-piece"><a href="mailto:karmarina046@gmail.com">karmarina046@gmail.com</a> <span class="material-symbols-outlined footer">email</span></div>
                <div className="contact-info-piece"><a href="tel:+787836406">787836406</a> <span class="material-symbols-outlined footer">call</span></div>
            </div>
        </section>
    )
}