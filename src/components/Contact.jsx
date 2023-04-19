import React from "react";
import "../styles/contact.css"

export default function Contact () {

    function onSubmit(e) {
        e.preventDefault()
    }

    return (
        <section id="contact">
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Imię"/>
                <input type="tel" placeholder="Numer telefonu"/>
                <input type="email" placeholder="E-mail"/>
                <input type="text" placeholder="Okolica"/>
                <textarea placeholder="Komentarz"></textarea>
                <button className="accent">WYŚLIJ</button>
            </form>
            <h2>Umów się na<br/> bezpłatną wycenę!</h2>
            <div className="info">
                <h3>Сomfort Lux Sp. Z o.o.</h3>
                NIP 5252804077<br/>
                Adres: ul. Marszałkowska 58/15, 00-545 Warszawa<br/>
                Email: <a href="mailto:karmarina046@gmail.com">karmarina046@gmail.com</a><br/>
                Nt.tel: <a href="tel:+787836406">787836406</a>
            </div>
        </section>
    )
}