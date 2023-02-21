import React from 'react'
import Header from './src/components/Header'
import Footer from './src/components/Footer'

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