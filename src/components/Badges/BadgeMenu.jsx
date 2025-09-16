
import React from "react"

const BadgeMenuContext = React.createContext()

export default function Badge({children}) {
    const [typeSelection, setTypeSelection] = React.useState("square")
    const [colorSelection, setColorSelection] = React.useState({backgroundColor: "#F3F4F6", color: "#1F2937"})

    return(
        <BadgeMenuContext.Provider value={{setTypeSelection, setColorSelection, typeSelection, colorSelection}}>
            <div className="badge-menu">
                {children}
            </div>
        </BadgeMenuContext.Provider>
    )
}

export { BadgeMenuContext }