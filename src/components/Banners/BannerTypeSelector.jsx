
import React from "react"
import { BannerMenuContext } from "./BannerMenu"

export default function BannerTypeSelector({children}) {
    
    const { setBannerType } = React.useContext(BannerMenuContext)

    return (
        <select className="type-select" onChange={(e) => setBannerType(e.target.value)} >
            {children}
        </select>

    )
}