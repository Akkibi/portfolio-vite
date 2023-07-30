import * as React from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  // Outlet,
  // Route,
  // Link,
} from 'react-router-dom'
// import { useEffect } from 'react'
import reportWebVitals from './reportWebVitals'
// import Navbar from './components/Navbar'
import { AboutComponent } from './components/AboutComponent'
import { ContactComponent } from './components/ContactComponent'
import { HomeComponent } from './components/HomeComponent'
import LoadAnimation from './components/LoadAnimation'
import App from './App'
import './index.css'

// function App() {
//   // ... (The same App component code as before) ...

//   // Return the main component structure.
//   return (
//     <div className="h-full w-full overflow-hidden border border-solid border-black">
//       <Navbar />
//       <Outlet />
//     </div>
//   )
// }
// const a = 10
// const b = 20

// if (navigationType === null) {
//   return <div>Loading...</div>
// }
// const action: string = navigationType

// const location = useLocation()
// const pathname = location.pathname // Extract the pathname from the location.
// useEffect(() => {
//   if (action !== 'POP') {
//     window.scrollTo(0, 0) // Scroll to the top of the page.
//   }
// }, [action, pathname]) // Run this effect when action or pathname changes.

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        // loader: async () => {
        //   return HomeComponent(navigationType)
        // },
        element: <LoadAnimation anim={HomeComponent} />,
      },
      {
        path: 'about',
        element: <LoadAnimation anim={AboutComponent} />,
      },
      {
        path: 'contact',
        element: <LoadAnimation anim={ContactComponent} />,
      },
      // Add more routes for other components if needed
    ],
  },
])

let container: HTMLElement | null = null

document.addEventListener('DOMContentLoaded', function () {
  if (!container) {
    container = document.getElementById('root') as HTMLElement
    const root = createRoot(container)
    root.render(<RouterProvider router={router} />)
  }
})

reportWebVitals()
