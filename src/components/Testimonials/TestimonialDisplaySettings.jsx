import React from "react"
import { TestimonialMenuContext } from "./TestimonialMenu"

export default function TestimonialDisplaySettings() {
    const {setDevice} = React.useContext(TestimonialMenuContext)

    function handleClick(event) {
        setDevice(event.target.value)
    }

    return (
        <fieldset className="device-selector">
            <legend>Select Device:</legend>
            <input id="desktop" key="desktop" value="desktop" type="radio" onClick={(event) => handleClick(event)} name="device" defaultChecked="desktop"/>
            <label htmlFor="desktop">Desktop</label>
            <input id="mobile" key="mobile" value="mobile" type="radio"  onClick={(event) => handleClick(event)} name="device" />
            <label htmlFor="mobile">Mobile</label>
        </fieldset>
    )
}