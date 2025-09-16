import React from "react";
import { BannerMenuContext } from "./BannerMenu";

export default function BannerStyleItem({children}) {
    const { setBannerStyle } = React.useContext(BannerMenuContext)

    return (
        <>
            <input type="radio" id={children} onClick={() => setBannerStyle(children)} name="selector" defaultChecked={children === "Multi Line" ? true : false}/>
            <label htmlFor={children}>{children}</label>
        </>
    )
}