import { useNavigationType, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
// import { AboutComponent } from './components/AboutComponent'
// import { ContactComponent } from './components/ContactComponent'
// import { HomeComponent } from './components/HomeComponent'
import { Outlet } from 'react-router-dom'
// Define the main App component.

function App() {
  return (
    <div className="h-full w-full overflow-hidden border border-solid border-black p-0 font-secondaryFont">
      <Navbar />
      <Outlet />
    </div>
  )
}

// Export the App component as the default export.
export default App
