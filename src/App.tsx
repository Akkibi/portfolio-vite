import { useEffect } from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import ThumbnailsWrapperComponent from './components/ThumbnailsWrapperComponent'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useNavigationType } from 'react-router-dom'
import { gsap } from 'gsap'

function App() {
  const navigationType: string | null = useNavigationType()

  const navigate = useNavigate()

  // Adding event listeners for key press
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        // Navigate back on ESC press
        navigate('/')
      } else if (event.key === 'ArrowDown') {
        // Navigate to /project on DOWN arrow press
        navigate('/project')
      }
    }

    window.addEventListener('keydown', handleKeyPress)

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [navigate])

  return (
    <div
      className="border-primary bg-secondary absolute left-0 top-0 h-full w-full overflow-hidden border border-solid p-0 font-secondaryFont"
      id="app"
    >
      <div className="absolute left-1/2 top-1/2 h-[10vh] w-[1px] -translate-x-1/2 -translate-y-1/2 select-none bg-white"></div>

      <Navbar />
      <ThumbnailsWrapperComponent />
      <Outlet />
    </div>
  )
}

// Export the App component as the default export.
export default App
