import React from 'react'
import Hero from '../components/Hero'
import ShopCategories from '../components/ShopCategories'
import BestDealProducts from '../components/BestDealProducts'
import GetDiscount from '../components/GetDiscount'
import PopularProduct from '../components/PopularProduct'
import HeroTwo from '../components/HeroTwo'

function Home() {
  return (
    <div>
        <Hero/>
        <ShopCategories/>
        <BestDealProducts/>
        <GetDiscount/>  
        <PopularProduct/>
        <HeroTwo/>
    </div>
  )
}

export default Home
