import React from "react"
import { CardMenuContext } from "./CardMenu"

export default function CardTextSelector() {
    const {setCardText} = React.useContext(CardMenuContext)

    function handleChange(event, index) {
        setCardText(prev => {
            let copyPrev = [...prev]
            copyPrev[index] = event.target.value
            return copyPrev
        })
    }

    return (
        <div className="card-text-selector">
            <div className="text-area-div">
                <label htmlFor="header">Please Enter Card Title:</label>
                <textarea id="header" className="card-text" onChange={(event) => handleChange(event, 0)} placeholder="Easy Deployment"></textarea>
            </div>
            <div className="text-area-div">
                <label htmlFor="desc">Please Enter Card Description:</label>
                <textarea id="desc" className="card-text" onChange={(event) => handleChange(event, 1)} placeholder="Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis."></textarea>
            </div>
        </div>
    )
}