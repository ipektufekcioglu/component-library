
import React from "react"
import { ColorTemplate } from "../../ColorTemplate"
import { BadgeMenuContext } from "./BadgeMenu"

export default function BadgeColorSelector() {

    const { setColorSelection, colorSelection} = React.useContext(BadgeMenuContext)

    function handleSelection(item) {
        setColorSelection(item)
    }
    
    const colorElements = ColorTemplate.map(colorItem => {
        const styles = {backgroundColor: colorItem.backgroundColor, color: colorItem.color, border: colorItem === colorSelection ? "2px solid black" : "2px solid #c3c7c4"}
        return <button key={colorItem.backgroundColor} 
                       className={`color-btn ${colorItem === colorSelection ? "selected-color" : ""}`} 
                       onClick={() => handleSelection(colorItem)}
                       style={styles}></button>
    })
    console.log(colorElements)
    return (
        <div className="color-container">
            {colorElements}
        </div>
    )
}