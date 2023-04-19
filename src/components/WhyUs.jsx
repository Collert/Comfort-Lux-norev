import React from "react";
import "../styles/whyus.css"

export default function WhyUs() {
    return (
        <section id="why-us">
            <h2>Dlaczego my?</h2>
            <div className="points">
                <div className="point">
                    <span class="material-symbols-outlined">auto_awesome</span>
                    <h3>Jakość na najwyższym poziomie</h3>
                </div>
                <div className="point">
                    <span class="material-symbols-outlined">pending_actions</span>
                    <h3>Terminowość</h3>
                </div>
                <div className="point">
                <span class="material-symbols-outlined">architecture</span>
                    <h3>Profesjonalizm w każdym aspekcie</h3>
                </div>
                <div className="point">
                    <span class="material-symbols-outlined">engineering</span>
                    <h3>Zgrana, doświadczona ekipa</h3>
                </div>
                <div className="point">
                    <span class="material-symbols-outlined">thumb_up</span>
                    <h3>Najlepsi fachowcy i specjaliści</h3>
                </div>
            </div>
        </section>
    )
}