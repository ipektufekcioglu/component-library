import React from "react"
import { BannerMenuContext } from "./BannerMenu"

export default function BannerTextSelector({children}) {
    const {bannerType, bannerStyle, setBannerText, bannerText} = React.useContext(BannerMenuContext)
    
    const placeholder = bannerType === "Success" ? "Congratulations!" :
                        bannerType === "Warning" ? "Attention" :
                        bannerType === "Error" ? "There is a problem with your application" : "Update available"

    function handleChange(event, index) {
        setBannerText(prev => {
            let newArr = [...prev]
            newArr[index] = event.target.value
            return newArr
        })
    }

    return (
        <>
            <div className="banner-header-input">
                <label htmlFor="header" >Please enter Banner Header:</label>
                <textarea id="header" placeholder={placeholder} onChange={(e) => handleChange(e, 0)}></textarea>
            </div>
            {bannerStyle === "Multi Line" && <div className="banner-desc-input">
                <label htmlFor="header" >Please enter Banner Description:</label>
                <textarea id="header" placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam." onChange={(e) => handleChange(e, 1)}></textarea>
            </div>}
        </>
    )
}