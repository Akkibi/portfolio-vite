import { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'

const Navbar: FunctionComponent = () => {
  return (
    <div className="w-full p-2 transition-colors">
      <h1 id="nav" className="text-primary relative font-primaryFont text-xxl">
        NAV ELEMENTS
      </h1>
      <div className="text-primary flex gap-2">
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
