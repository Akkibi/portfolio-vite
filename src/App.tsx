import { Routes, Route, useNavigationType, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import AboutComponent from './components/AboutComponent'
import ContactComponent from './components/ContactComponent'
import HomeComponent from './components/HomeComponent'
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
  useEffect(() => {
    let title = ''
    let metaDescription = ''

    switch (pathname) {
      case '/':
        title = '' // Set the title to an empty string when the pathname is "/"
        metaDescription = '' // Set the meta description to an empty string when the pathname is "/"
        break
      case '/about': // Handle the "/about" page
        title = 'About Us'
        metaDescription = 'Learn more about our company and team.'
        break
      // Add more cases for other pages if needed
      case '/contact':
        title = 'Contact Us'
        metaDescription = 'Get in touch with our support team.'
        break
      // Default case (optional) to handle other pathnames not explicitly specified.
      // Add more cases for different pathnames if needed.

      // Default case (optional) to handle other pathnames not explicitly specified.
      default:
        title = 'Portfolio'
        metaDescription =
          "Welcome to my portfolio. I'm Akira Valade. I'm a creative developper / front-end developper based in Paris and I do 3D for fun."
    }

    // Set the document title if it has been defined.
    if (title) {
      document.title = title
    }

    // Set the meta description if it has been defined.
    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      )
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription
      }
    }
  }, [pathname]) // Run this effect when the pathname changes.

  // Return the main component structure.
  return (
    <div className="h-full w-full overflow-hidden border border-solid border-black">
      <Navbar />
      <Routes>
        {/* Define the route for the root path and render the FrameComponent component when the path matches */}
        <Route path="/" element={<HomeComponent />} />
        <Route path="/about" element={<AboutComponent />} />
        <Route path="/contact" element={<ContactComponent />} />
        {/* Render the AboutComponent for the "/about" path */}
      </Routes>
    </div>
  )
}

// Export the App component as the default export.
export default App
