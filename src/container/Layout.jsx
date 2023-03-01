import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'

function Layout({ children }) {
  const [toggleSidebar, setToggleSidebar] = React.useState(false)

  const handleOpenSidebar = () => {
    setToggleSidebar(true)
  }

  const handleCloseSidebar = () => {
    setToggleSidebar(false)
  }

  return (
    <div className='w-full h-full'>
        <Header toggleFunction={handleOpenSidebar}/>
            {children}
        <Footer /> 
        {
          toggleSidebar &&
          <Sidebar closeSidebar={handleCloseSidebar} />
        }
    </div>
  )
}

export default Layout