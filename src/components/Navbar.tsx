import { FunctionComponent, useState } from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
const Navbar: FunctionComponent = () => {
  const [categorie, setCategorie] = useState('dev')

  return (
    <div className="absolute h-full w-full p-2 transition-colors">
      <h1 id="nav" className="text-primary relative font-primaryFont text-xxl">
        Akira Valade
      </h1>
      <NavLink
        to="/"
        onClick={() => {
          setCategorie('dev')
        }}
        className={
          categorie === 'dev'
            ? 'bg-white px-4 py-2 text-black'
            : 'bg-transparent px-4 py-2 text-white'
        }
      >
        Developper
      </NavLink>
      <NavLink
        to="/"
        onClick={() => {
          setCategorie('2d')
        }}
        className={
          categorie === '2d'
            ? 'bg-white px-4 py-2 text-black'
            : 'bg-transparent px-4 py-2 text-white'
        }
      >
        2D Artist
      </NavLink>
      <NavLink
        to="/"
        onClick={() => {
          setCategorie('3d')
        }}
        className={
          categorie === '3d'
            ? 'bg-white px-4 py-2 text-black'
            : 'bg-transparent px-4 py-2 text-white'
        }
      >
        3D Artst
      </NavLink>

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
