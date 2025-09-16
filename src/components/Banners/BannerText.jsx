import React from "react"
import { BannerMenuContext } from "./BannerMenu"

export default function BannerText() {
    const {bannerText, bannerStyle} = React.useContext(BannerMenuContext)
  
    return (
        <>
            <h2>{bannerText[0]}</h2>
            {bannerStyle === "Multi Line" && <p>{bannerText[1]}</p>}
        </>
    )

}