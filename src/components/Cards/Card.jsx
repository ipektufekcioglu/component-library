import React from "react"
import { CardMenuContext } from "./CardMenu"
import cardBrandIcon from "../../assets/card-brand-icon.png"


export default function Card() {
    const {cardText} = React.useContext(CardMenuContext)

    return (
        <div className="card-container">
            <img className="card-icon" src={cardBrandIcon} alt="upload icon"/>
            <h2>{cardText[0]}</h2>
            <p>{cardText[1]}</p>
        </div>
    )
}