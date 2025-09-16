import BackIcon from "./assets/back-button.svg?react"
import { AppContext } from "./App"
import React from "react"
import Homepage from "./Homepage"

export default function BackButton() {
    const { setPage } = React.useContext(AppContext)

    function handleBack() {
        setPage({
                Homepage: true,
                Badges: false,
                Banners: false,
                Cards: false,
                Testimonials: false
        })
    }

    return (
        <button 
            onClick={handleBack} 
            className="back-btn">
        </button>
    )
}