import { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'

const Navbar: FunctionComponent = () => {
  return (
    <div className="w-full p-2">
      <h1 id="nav" className="relative font-primaryFont text-xxl">
        NAV ELEMENTS
      </h1>
      <div className="flex gap-2">
        <Link to="/">Home</Link>
        <br />
        <Link to="/About">About</Link>
        <br />
        <Link to="/Contact">Contact</Link>
      </div>
    </div>
  )
}

export default Navbar
