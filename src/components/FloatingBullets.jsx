import React from "react";

export default function FloatingBullets () {
    return (
        <section id="five-bullet-points">
            <div className="bullet-column">
                <div className="floating-bullet">
                    <div className="wrapper">
                        <div><span className="material-symbols-outlined">shelves</span></div>
                        <div><h3>Title</h3></div>
                        <div><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore fugit autem reprehenderit, dicta neque odit! Enim minus commodi nesciunt saepe corrupti, qui quas quia alias? A cum officiis assumenda consequatur.</p></div>
                    </div>
                </div>
                <div className="floating-bullet">
                    <div className="wrapper">
                        <div><span className="material-symbols-outlined">hardware</span></div>
                        <div><h3>Title</h3></div>
                        <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et totam natus odio, eos cum libero odit quae accusantium voluptatum ipsam error quo, corporis alias inventore saepe. Aut cum labore suscipit.</p></div>
                    </div>
                </div>
            </div>
            <div className="bullet-column">
                <img id="brush-illustration" src="/ai_illustrations/brush.png"/>
                <div className="floating-bullet">
                    <div className="wrapper">
                        <div><span className="material-symbols-outlined">bathtub</span></div>
                        <div><h3>Title</h3></div>
                        <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div>
                    </div>
                </div>
            </div>
            <div className="bullet-column">
                <div className="floating-bullet">
                    <div className="wrapper">
                        <div><span className="material-symbols-outlined">cleaning_services</span></div>
                        <div><h3>Title</h3></div>
                        <div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla repellat temporibus enim dolores consequatur nesciunt natus, rem amet totam sit eaque, est, praesentium eligendi suscipit ex vitae vel alias deserunt?</p></div>
                    </div>
                </div>
                <div className="floating-bullet">
                    <div className="wrapper">
                        <div><span className="material-symbols-outlined">plumbing</span></div>
                        <div><h3>Title</h3></div>
                        <div><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt quia corporis consequatur explicabo quasi facere, magni blanditiis eos quo ipsam in error ad accusantium accusamus eveniet praesentium vitae unde quae.</p></div>
                    </div>
                </div>
            </div>
        </section>
    )
}