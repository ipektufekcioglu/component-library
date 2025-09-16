import React from "react"
import { TestimonialMenuContext } from "./TestimonialMenu"

export default function TestimonialImageUploader() {
    const {setImage, image} = React.useContext(TestimonialMenuContext)

    function handleChange(event) {
        const file = event.target.files[0]
        setImage(URL.createObjectURL(file))
    }

    console.log(image)

    return (
        <div className="image-upload-div">
            <label htmlFor="image-uploader">Select Image:</label>
            <input className="image-uploader" id="image-uploader" onChange={(event) => handleChange(event)} name="avatar" type="file" accept="image/png, image/jpeg"/>
        </div>
    )
}