import React from "react"
import {TestimonialMenuContext} from "./TestimonialMenu"
import quoteIcon from "../../assets/quote-icon.png"


export default function Testimonial() {
    const {testimonialText, device, image} = React.useContext(TestimonialMenuContext)
    console.log(image)

    return (
        <div className={`testimonial-container ${device}`}>
            <img src={image}/>
            <div className="text-div">
                <img src={quoteIcon} alt="quote icon" />
                <h3>{testimonialText[0]}</h3>
                <p>{testimonialText[1]}</p>
                <p>{testimonialText[2]}</p>
            </div>
        </div>
    )
}