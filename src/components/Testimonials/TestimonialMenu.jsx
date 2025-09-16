import React from "react"
import avatarImage from "../../assets/avatar.png"

const TestimonialMenuContext = React.createContext()

export default function TestimonialMenu({children}) {
    const [testimonialText, setTestimonialText] = React.useState([
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. ",
        "May Andersons",
        "Workcation, CTO"
    ])

    const [device, setDevice] = React.useState("desktop")
    const [image, setImage] = React.useState(avatarImage)

    return (
        <TestimonialMenuContext.Provider value={{testimonialText, setTestimonialText, device, setDevice, image, setImage}}>
            <div className="testimonial-menu">
                {children[0]}
                <fieldset className="testimonial-set">
                    <legend>Testimonial Settings</legend>
                    <div className="left-settings">
                        {children.slice(1,3)}
                    </div>
                    <div className="testimonial-text-set">
                        {children.slice(3)}
                    </div>
                </fieldset>
            </div>
        </TestimonialMenuContext.Provider>
    )
}

export {TestimonialMenuContext}