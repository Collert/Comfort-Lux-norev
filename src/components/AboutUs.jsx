import React from "react";
import '../styles/aboutus.css'

export default function AboutUs () {
    return (
        <section id="about-us">
            <div className="text">
                <h2>O nas</h2>
                <p>
                    Oferujemy szeroki zakres usług remontowo-wykończeniowych. Naszym celem jest zadowolenie
                    klienta, a także satysfakcja z realizowanych zadań, do których podchodzimy zawsze w sposób
                    indywidualny i profesjonalny. Zapraszamy niżej do zapoznania się z naszymi zrealizowanymi
                    projektami.
                </p>
                <h3>Zalety naszej firmy</h3>
                <ul>
                    <li><span>Wysoki standard usług</span></li>
                    <li><span>Bez ukrytych kosztów</span></li>
                    <li><span>Wycena przed zawarciem umowy</span></li>
                    <li><span>Pierwsze pieniądze wpłacasz dopiero po zakończeniu pierwszego etapu prac.</span></li>
                    <li><span>Współpraca tylko i wyłącznie ze sprawdzonymi ekipami spełniającymi standardy firmy.</span></li>
                </ul>
            </div>
            <div className="img-container">
                {/* <img alt="render of a kitchen" src="./ai_illustrations/kitchen_cropout.png"/> */}
            </div>
        </section>
    )
}