import React from "react";
import "../styles/contact.css"
import { useInView } from "react-intersection-observer";

export default function Contact (props) {

    const { ref, inView } = useInView();
    const [formData, setFormData]  =React.useState({
        name:"",
        phone:"",
        email:"",
        district:"",
        comment:""
    })
    const [formFilled, setFormFilled] = React.useState(false)

    React.useEffect(()=>{
        props.setVisibleSections(prev=>({
            ...prev,
            contact:inView
        }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[inView])

    function onSubmit(e) {
        e.preventDefault()
        const url = "https://script.google.com/macros/s/AKfycbyNs3FR3WWNFK_GeR_oVcLfu7xP8IUuzsYIItnx8IMo7CV_LuuWaGONFvCjl7tehvxC/exec"
        setFormFilled(true)
        fetch(url, {
            method:"POST",
            body: new FormData(document.querySelector("#form"))
        })
        setTimeout(() => {
            setFormData({
                name:"",
                phone:"",
                email:"",
                district:"",
                comment:""
            })
        }, 1000);
        setTimeout(() => {
            setFormFilled(false)
        }, 5000);
    }

    const thankYouBanner = (
        <div id="thank-you-banner">
            <span>Dziękuję!<br/> Skontaktujemy się z wami wkrótce.</span>
        </div>
    )

    function handleChange(e) {
        setFormData((prev) => ({...prev, [e.target.name]:e.target.value}))
    }

    return (
        <section ref={ref} id="contact">
            <form id="form" onSubmit={onSubmit}>
                <h2>Umów się na<br/> bezpłatną wycenę!</h2>
                <input onChange={handleChange} value={formData.name} name="name" type="text" placeholder="Imię"/>
                <input onChange={handleChange} value={formData.phone} name="phone" type="tel" placeholder="Numer telefonu"/>
                <input onChange={handleChange} value={formData.email} name="email" type="email" placeholder="E-mail"/>
                <input onChange={handleChange} value={formData.district} name="district" type="text" placeholder="Okolica"/>
                <textarea onChange={handleChange} value={formData.comment} name="comment" placeholder="Komentarz"></textarea>
                <button className="accent">WYŚLIJ</button>
                {formFilled && thankYouBanner}
            </form>
            <div className="info">
                <img src="./branding/logo/original/logo-transparent.png" alt="logo"/>
                <h3>Сomfort Lux Sp. Z o.o.</h3>
                {/* NIP 5252804077<br/> */}
                <div className="contact-info-piece">ul. Marszałkowska 58/15, 00-545 Warszawa  <span className="material-symbols-outlined footer">place</span></div>
                <div className="contact-info-piece"><a href="mailto:karmarina046@gmail.com">karmarina046@gmail.com</a> <span className="material-symbols-outlined footer">email</span></div>
                <div className="contact-info-piece"><a href="tel:+787836406">787836406</a> <span className="material-symbols-outlined footer">call</span></div>
            </div>
        </section>
    )
}