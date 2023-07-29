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

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        loader: async () => {
          return HomeComponent(1, 2)
        },
        element: <h1>Home</h1>,
      },
      {
        path: 'about',
        loader: async () => {
          return AboutComponent(1, 2)
        },
        element: <h1>About</h1>,
      },
      {
        path: 'contact',
        loader: async () => {
          return ContactComponent(1, 2)
        },
        element: <h1>Contact</h1>,
      },
      // Add more routes for other components if needed
    ],
  },
])

let container: HTMLElement | null = null

document.addEventListener('DOMContentLoaded', function (event) {
  if (!container) {
    container = document.getElementById('root') as HTMLElement
    const root = createRoot(container)
    root.render(<RouterProvider router={router} />)
  }
})

reportWebVitals()
