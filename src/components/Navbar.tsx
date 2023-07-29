import { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'

const Navbar: FunctionComponent = () => {
  return (
    <div className="w-full bg-black p-2 text-white">
      <h1 className="text-11xl">NAV ELEMENTS</h1>
      <Link to="/">Home</Link>
      <br />
      <Link to="/About">About</Link>
      <br />
      <Link to="/Contact">Contact</Link>
    </div>
  )
}

export default Navbar
