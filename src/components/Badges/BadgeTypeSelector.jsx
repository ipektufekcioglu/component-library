import React from "react"
import { BadgeMenuContext } from "./BadgeMenu"

export default function BadgeTypeSelector() {

    const types = ["square", "pill"]
    const { setTypeSelection } = React.useContext(BadgeMenuContext)

    function handleSelection(id) {
        setTypeSelection(id)
    }

    const radioElements = types.map(typeSel=> {
        return <div>  
                    <input className="radio-btn"
                           onClick={() => handleSelection(typeSel)}  
                           key={typeSel} 
                           type="radio" 
                           value={typeSel} 
                           name="selector" 
                           defaultChecked={typeSel === "square" ? true : false}/>
                    <label htmlFor={typeSel}>{typeSel}</label>
                </div>   
    })
    return (
        <fieldset>
            <legend>Select a badge type:</legend>
            {radioElements}
        </fieldset>
    )
}