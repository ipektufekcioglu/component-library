
import React from "react"
import {AppContext} from "./App"

export default function Homepage() {
    const itemArray = ["Badges", "Banners", "Cards", "Testimonials"]
    const { setPage } = React.useContext(AppContext)
    const colors = ["#fcf6bd", "#d0f4de", "#a9def9", "#e4c1f9"]

    
    function handleClick(id) {
        setPage(prev => {
            return {...prev, Homepage:false, [id]: true}
        })
    }

    const homepageElements = itemArray.map((item, index) => {
        return <button key={item} onClick={() => handleClick(item)} className="homepage-btn" style={{backgroundColor:colors[index]}}>{item}</button>
    })

    return (
        <div className="homepage">
           <h1>React Components Homepage</h1>
           <div className="homepage-nav">
               {homepageElements}
           </div>
        </div>
    )
}