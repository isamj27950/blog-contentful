import React from 'react'
import Navbar from '../navigation/Navbar'
import Footer from '../footer/Footer'

export default function Layout({children}) {
  return (
    <div>
   <Navbar />
   <main>{children}</main>
   <Footer /> 
    </div>
  )
}
