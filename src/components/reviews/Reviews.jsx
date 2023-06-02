import React from "react";
import Review from "./Review";
import "../../styles/reviews.css"
import { useInView } from "react-intersection-observer";

export default function Reviews(props) {
    const reviewsArr = [
        {
            name:"Michał B.",
            text:"Współpraca przy remoncie mieszkania przebiegła pomyślnie. Pracownikom można zaufać, znają się na rzeczy i sami też doradzą. Prace wykonane solidnie a ceny prac dobre. Jestem architektem, wiec zależało mi na dobrym wykonaniu wizualnie jak i wykończeniu podstaw, takich jak podłoga czy ściany. Ekipa remontowa spełniła moje oczekiwanie, polecam.",
            picture:"",
            rating:5
        },
        {
            name:"Marek S.",
            text:"Fajna zgrana ekipa. Wyremontowali mi całe mieszkanie 67 m2. Ludzie godni zaufania, można im zostawić klucze i jechać w cholerę na wakacje. Posprzątają, poprzestawiają meble sami i nic klienta nie interesuje. Polecam.",
            picture:"",
            rating:5
        },
        {
            name:"Nataliia P.",
            text:"Są mistrzami w swoim fachu, bardzo poważnie traktują swoje obowiązki i dobrze wykonują swoją pracę. Zawsze są w kontakcie, specjaliści wszystko dokładnie tłumaczą i pomagają dobrać najlepszy materiał i sposób wykonania. Polecam!",
            picture:"",
            rating:5
        },
        {
            name:"Bartłomiej K.",
            text:"Przerabiałem kilka różnych ekip - ale firmę Karmeri polecam z czystym sumieniem. Bardzo dobry kontakt z inwestorem, terminowość i wysoka jakość wykonanych prac. Polecam.",
            picture:"",
            rating:5
        },
        {
            name:"Andrzej S.",
            text:"Bardzo przyjazna i profesjonalna firma i zespół z która współpracuje już wiele lat. Polecam!",
            picture:"",
            rating:5
        },
    ]
    const reviews = reviewsArr.map(data => <Review review={data}/>)

    const { ref, inView } = useInView();
    
    React.useEffect(()=>{
        props.setVisibleSections(prev=>({
            ...prev,
            reviews:inView
        }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[inView])

    return (
        <section ref={ref} id="reviews">
            {reviews}
        </section>
    )
}