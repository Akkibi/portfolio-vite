import { useNavigationType } from 'react-router-dom'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import ThumbnailsWrapperComponent from './components/ThumbnailsWrapperComponent'
import { useEffect } from 'react'
import { gsap } from 'gsap'

function App() {
  const navigationType: string | null = useNavigationType()

  useEffect(() => {
    if (navigationType === 'POP') {
      gsap.to('.slide-track', {
        duration: 0.5,
        transform: 'translateY(-50%)',
        ease: 'power2',
      })
    }
  })
  if (navigationType !== 'POP') {
  }

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
