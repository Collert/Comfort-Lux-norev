import React from "react";

export default function WorkWithUsSection(props) {
    return(
        <div className="section">
            {props.text && <h3>{props.text}</h3>}
        </div>
    )
}