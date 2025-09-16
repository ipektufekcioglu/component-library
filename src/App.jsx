import React from 'react'
import './App.css'
import BadgeMenu from './components/Badges'
import Homepage from './Homepage'
import BackButton  from './BackButton'
import BannerMenu from './components/Banners/index'
import CardMenu from "./components/Cards/index"
import TestimonialMenu from './components/Testimonials/index'

const AppContext = React.createContext()

function App() {

  const [page, setPage] = React.useState({
        Homepage: true,
        Badges: false,
        Banners: false,
        Cards: false,
        Testimonials: false
  })

  console.log(page)

  return (
    <AppContext.Provider value={{setPage}}>
      {page.Homepage && <Homepage></Homepage>}
      {page.Badges && <BadgeMenu>
          <BadgeMenu.Badge>Badge</BadgeMenu.Badge>
          <BadgeMenu.TypeSelector></BadgeMenu.TypeSelector>
          <BadgeMenu.ColorSelector></BadgeMenu.ColorSelector>
          <BackButton></BackButton>
      </BadgeMenu>}
      {page.Banners && 
      <BannerMenu>
        <BannerMenu.Banner>
            <BannerMenu.Text></BannerMenu.Text>
        </BannerMenu.Banner>
        <BannerMenu.TypeSelector>
            <BannerMenu.TypeItem>Success</BannerMenu.TypeItem>
            <BannerMenu.TypeItem>Warning</BannerMenu.TypeItem>
            <BannerMenu.TypeItem>Error</BannerMenu.TypeItem>
            <BannerMenu.TypeItem>Neutral</BannerMenu.TypeItem>
        </BannerMenu.TypeSelector>
        <BannerMenu.StyleSelector>
            <BannerMenu.StyleItem>Multi Line</BannerMenu.StyleItem>
            <BannerMenu.StyleItem>Single Line</BannerMenu.StyleItem>
        </BannerMenu.StyleSelector>
        <BackButton></BackButton>
        <BannerMenu.TextSelector></BannerMenu.TextSelector>
      </BannerMenu>}
      {page.Cards && <CardMenu>
        <CardMenu.Card></CardMenu.Card>
        <CardMenu.TextSelector></CardMenu.TextSelector>
        <BackButton></BackButton>
      </CardMenu>}
      {page.Testimonials && 
      <TestimonialMenu>
        <TestimonialMenu.Testimonial></TestimonialMenu.Testimonial>
        <TestimonialMenu.ImageUploader></TestimonialMenu.ImageUploader>
        <TestimonialMenu.DisplaySettings></TestimonialMenu.DisplaySettings>
        <TestimonialMenu.TextSelector></TestimonialMenu.TextSelector>
      </TestimonialMenu>}
    </AppContext.Provider>
  )
}

export default App
export {AppContext}
