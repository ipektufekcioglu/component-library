
import React from "react"
import { BadgeMenuContext } from "./BadgeMenu"

export default function Badge({children}) {

    const { typeSelection, colorSelection } = React.useContext(BadgeMenuContext)

    

    return(
        <button className={`badge ${typeSelection}`} style={colorSelection}>{children}</button>
    )
}