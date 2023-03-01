import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Layout({ children }) {
  return (
    <div className='w-full h-full'>
        <Header />
            {children}
        <Footer />
    </div>
  )
}

export default Layout