import { useNavigationType, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
// import { AboutComponent } from './components/AboutComponent'
// import { ContactComponent } from './components/ContactComponent'
// import { HomeComponent } from './components/HomeComponent'
import { Outlet } from 'react-router-dom'
// Define the main App component.

function App() {
  // Get the navigation action (PUSH, POP, or REPLACE) using the useNavigationType hook.

  // Get the current location using the useLocation hook.
  const navigationType: string | null = useNavigationType()
  if (navigationType === null) {
    // Handle the case when navigationType is null (e.g., loading state or error).
    // You can provide a default value or render a loading/error component.
    return <div>Loading...</div>
  }
  const action: string = navigationType

  const location = useLocation()
  const pathname = location.pathname // Extract the pathname from the location.

  // useEffect hook to handle scrolling to the top of the page when navigation action is not "POP".
  useEffect(() => {
    if (action !== 'POP') {
      window.scrollTo(0, 0) // Scroll to the top of the page.
    }
  }, [action, pathname]) // Run this effect when action or pathname changes.

  // useEffect hook to dynamically set the document title and meta description based on the current pathname.

  // Set the document title if it has been defined.

  // Return the main component structure.
  return (
    <div className="h-full w-full overflow-hidden border border-solid border-black p-0 font-secondaryFont">
      <Navbar />
      <Outlet />
    </div>
  )
}

// Export the App component as the default export.
export default App
