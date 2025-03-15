import React from 'react'
import Header from '../../components/layouts/header/Header'
import Footer from '../../components/layouts/footer/Footer'
import Banner from '../../components/layouts/banner/Banner'
import GamingPlatform from '../../components/GammingFlatform/GamingFlatForm'

function HomePage() {
  return (
    <>
      <Header/>
      <Banner/>
      <GamingPlatform/>
      <Footer/>
    </>
  )
}

export default HomePage