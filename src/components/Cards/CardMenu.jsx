import React from "react"

const CardMenuContext = React.createContext()

export default function CardMenu({children}) {
    const [cardText, setCardText] = React.useState(["Easy Deployment", "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis."])

    return (
        <CardMenuContext.Provider value={{cardText, setCardText}}>
            <div className="card-menu">
                {children}
            </div>
        </CardMenuContext.Provider>
    )
}

export {CardMenuContext}