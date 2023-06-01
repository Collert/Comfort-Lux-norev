import React from "react";

export default function Review(props) {
    const {review} = props
    console.log(review)

    return(
        <div className="review-container">
            <div className="review">
                <div className="person-container">
                    <div className="person">
                        <img src={review.picture ? review.picture : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"} alt=""/>
                        <span>{review.name}</span>
                    </div>
                </div>
                <div className="body">
                    <span>{review.text}</span>
                </div>
                <div className="rating">
                    <span class={`material-symbols-outlined star ${review.rating >= 1 ? "filled" : ""}`}>grade</span>
                    <span class={`material-symbols-outlined star ${review.rating >= 2 ? "filled" : ""}`}>grade</span>
                    <span class={`material-symbols-outlined star ${review.rating >= 3 ? "filled" : ""}`}>grade</span>
                    <span class={`material-symbols-outlined star ${review.rating >= 4 ? "filled" : ""}`}>grade</span>
                    <span class={`material-symbols-outlined star ${review.rating >= 5 ? "filled" : ""}`}>grade</span>
                </div>
            </div>
        </div>
    )
}