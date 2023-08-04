import { useNavigationType, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import ThumbnailsWrapperComponent from './components/ThumbnailsWrapperComponent'

function App() {
  return (
    <div className="absolute left-0 top-0 h-full w-full overflow-hidden border border-solid border-white bg-black p-0 font-secondaryFont text-white">
      <Navbar />
      <div
        id="thumbnails"
        className=" absolute left-1/2 top-1/2 h-[60vh] w-full -translate-x-1/2  -translate-y-1/2 select-none overflow-hidden"
      >
        <ThumbnailsWrapperComponent />
      </div>
      <div className="h-full w-full p-2">
        <div>
          <Outlet />
          {/* <h1 id="title">Titre</h1>
          <p id="descrition">text</p>
          <div className="grid grid-cols-2 gap-2" id="imageGrid">
            <img
              className="h-[100px] w-[100px] object-cover"
              src={imageLoadExample}
              alt="une image"
            />
            <img
              className="h-[100px] w-[100px] object-cover"
              src={imageLoadExample}
              alt="une image"
            />
          </div> */}
        </div>
      </div>
    </div>
  )
}

// Export the App component as the default export.
export default App
