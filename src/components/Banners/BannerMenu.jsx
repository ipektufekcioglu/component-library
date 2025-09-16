import React from "react"

const BannerMenuContext = React.createContext()

export default function BannerMenu({children}) {
    
    const [bannerType, setBannerType] = React.useState("Success")
    const [bannerStyle, setBannerStyle] = React.useState("Multi Line")
    const [bannerText, setBannerText] = React.useState(["Congratulations!", "Lorem ipsum dolor sit amet consectetur adipisicing elit."])

    return (
        <BannerMenuContext.Provider value={{bannerType, setBannerType, bannerStyle, setBannerStyle, bannerText, setBannerText}}>
            <div className="banner-menu">
                {children[0]}
                <div className="banner-settings">
                    {children[1]}
                    {children[2]}
                </div>
                {children.slice(3)}
            </div>
        </BannerMenuContext.Provider>
    )
}

export { BannerMenuContext }