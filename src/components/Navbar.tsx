import { FunctionComponent, useState } from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { gsap } from 'gsap'
const Navbar: FunctionComponent = () => {
  const [categorie, setCategorie] = useState('dev')
  let startPosition: string = '-6.4%'
  let imagesStartPosition: string = '93.6%'
  if (categorie === 'dev') {
    startPosition = '-6.4%'
    imagesStartPosition = '93.6%'
  } else if (categorie === '2d') {
    startPosition = '-40%'
    imagesStartPosition = '60'
  } else if (categorie === '3d') {
    startPosition = '-75%'
    imagesStartPosition = '20%'
  }

  gsap.to('#slide-track', {
    duration: 0.5,
    transform: 'translate(' + startPosition + ',-50%)',
    overwrite: true,
    ease: 'power2',
  })
  gsap.to('.thumbnail', {
    duration: 0.5,
    objectPosition: imagesStartPosition + ' center',
    overwrite: true,
    ease: 'power2',
  })
  return (
    <div className="absolute h-full w-full p-2 transition-colors">
      <h1 id="nav" className="text-primary relative font-primaryFont text-xxl">
        Akira Valade
      </h1>
      <NavLink
        to="/"
        onClick={() => setCategorie('dev')}
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
        onClick={() => setCategorie('2d')}
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
        onClick={() => setCategorie('3d')}
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
