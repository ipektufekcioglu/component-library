import React from "react"
import { BannerMenuContext } from "./BannerMenu"

export default function BannerStyleSelector({children}) {
    const {setBannerStyle} = React.useContext(BannerMenuContext)

    return (
        <fieldset className="banner-type-fieldset">
            <legend>Please Select Banner Style:</legend>
            {children}
        </fieldset>
    )
}