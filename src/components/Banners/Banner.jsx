import React from "react"
import { BannerMenuContext } from "./BannerMenu"

export default function Banner({children}) {
    const { bannerType } = React.useContext(BannerMenuContext)
    console.log(bannerType.toLowerCase())

    return (
        <div className={`banner ${bannerType.toLowerCase()}`}>
            {children}
        </div>
    )
}