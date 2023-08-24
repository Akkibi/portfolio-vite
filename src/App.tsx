import { useEffect } from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import ThumbnailsWrapperComponent from './components/ThumbnailsWrapperComponent'
import { useState } from 'react'
import { gsap } from 'gsap'

function App() {
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
