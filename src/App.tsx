import { useNavigationType, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import ThumbnailsWrapperComponent from './components/ThumbnailsWrapperComponent'

function App() {
  return (
    <div className="absolute left-0 top-0 h-full w-full overflow-hidden border border-solid border-white bg-black p-0 font-secondaryFont text-white">
      <Navbar />
      <div className="absolute left-1/2 top-1/2 h-[70vh] w-[1px] -translate-x-1/2 -translate-y-1/2 select-none bg-white"></div>

      <ThumbnailsWrapperComponent />

      <div className="h-full w-full p-2">
        <Outlet />
      </div>
    </div>
  )
}

// Export the App component as the default export.
export default App
