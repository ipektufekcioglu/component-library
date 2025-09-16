import React from "react"
import {TestimonialMenuContext} from "./TestimonialMenu"

export default function TestimonialTextSelector() {
    const {setTestimonialText} = React.useContext(TestimonialMenuContext)

    function handleChange(event, index) {
        setTestimonialText(prev => {
            let prevCopy = [...prev]
            prevCopy[index] = event.target.value
            return prevCopy
        })
    }

    return (
        <>  
            <label htmlFor="quote">Enter Quote:</label>
            <textarea id="quote" onChange={(event) => handleChange(event,0)} placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue."></textarea>
            <label htmlFor="name">Enter Name:</label>
            <textarea id="name" onChange={(event) => handleChange(event,1)} placeholder="May Andersons"></textarea>
            <label htmlFor="company">Enter Company and Position:</label>
            <textarea id="company" onChange={(event) => handleChange(event,2)} placeholder="Workcation, CTO"></textarea>
        </>
    )
}