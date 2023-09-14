import React from "react"
import Navbar from "../Navbar"
import Footer from "../Footer"

const RootLayout = ({ children }) => {
  return (
    <div className='dark:bg-slate-900 dark:text-gray-200'>
      <Navbar />
      {/* <hr className='mx-5 mt-3 mb-5 bg-slate-950' /> */}
      {children}
      <hr className='mx-5 my-5 bg-slate-950' />
      <Footer />
    </div>
  )
}

export default RootLayout
