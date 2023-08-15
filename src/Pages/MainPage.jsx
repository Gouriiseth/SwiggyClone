import React from 'react'
import Navbar from '../Components/Navbar'
import Home from '../Components/Home'
import {Link} from 'react-router-dom'
import Footer from '../Components/Footer'
const MainPage = () => {
  return (
    <>
    <Navbar/>
    <Home/>
    <Footer />
    </>
    )
}

export default MainPage