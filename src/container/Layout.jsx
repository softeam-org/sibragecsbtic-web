import React, { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'

function Layout({ children }) {
  const [toggleSidebar, setToggleSidebar] = React.useState(false)

  const handleOpenSidebar = () => {
    setToggleSidebar(true)
    setSidebarOpen(true)
  }

  const handleCloseSidebar = () => {
    
    setToggleSidebar(false)
  }
  const [sidebarOpen, setSidebarOpen] = React.useState(false); 
  useEffect(() => {
    if (toggleSidebar) {
      setSidebarOpen(true);
      document.body.style.overflow = 'hidden';
    } else {
      setSidebarOpen(false);
      document.body.style.overflow = 'unset';
    }
  }, [toggleSidebar]);
  return (
    <div className='w-full h-full'>
        <Header toggleFunction={handleOpenSidebar}/>
            {children}
        <Footer /> 
          <Sidebar closeSidebar={handleCloseSidebar} sidebarOpen={sidebarOpen} />
    </div>
  )
}

export default Layout