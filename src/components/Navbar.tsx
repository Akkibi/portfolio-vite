import { get } from 'http'
import { FunctionComponent, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
const Navbar: FunctionComponent = () => {
  const [categorie, setCategorie] = useState('dev')

  return (
    <div className="absolute flex h-full w-full flex-row p-[4vh] transition-colors">
      <div className="flex w-[8vh] flex-col justify-between">
        <h1
          id="nav"
          className="text-primary relative m-0 w-max font-primaryFont text-xxl uppercase"
        >
          Akira Valade
        </h1>
        <p className="text-primary relative m-0 w-max font-secondaryFont text-xl uppercase">
          Développeur créatif front-end <br /> disponible à partir de septembre
        </p>
      </div>
      <div className="justify-betweens flex w-full flex-col justify-between">
        <div className="relative mx-auto inline-flex flex-row gap-4">
          <div className="flex" id="dev">
            <NavLink
              to="/"
              onClick={() => {
                setCategorie('dev')
              }}
              className={
                categorie === 'dev'
                  ? ' bg-primary text-secondary px-4 py-2 uppercase'
                  : ' bg-primary text-secondary hidden px-4 py-2 uppercase'
              }
            >
              Developper
            </NavLink>
            <NavLink
              to="/"
              onClick={() => {
                setCategorie('dev')
              }}
              className={
                categorie === 'dev'
                  ? 'text-primary hidden bg-transparent px-4 py-2 uppercase'
                  : 'text-primary bg-transparent px-4 py-2 uppercase'
              }
            >
              Developper
            </NavLink>
          </div>
          <div className="flex" id="2d">
            <NavLink
              to="/"
              onClick={() => {
                setCategorie('2d')
              }}
              className={
                categorie === '2d'
                  ? 'bg-primary text-secondary px-4 py-2 uppercase'
                  : 'bg-primary text-secondary hidden px-4 py-2 uppercase'
              }
            >
              2D Artist
            </NavLink>
            <NavLink
              to="/"
              onClick={() => {
                setCategorie('2d')
              }}
              className={
                categorie === '2d'
                  ? 'text-primary hidden bg-transparent px-4 py-2 uppercase'
                  : 'text-primary bg-transparent px-4 py-2 uppercase'
              }
            >
              2D Artist
            </NavLink>
          </div>
          <div className="flex" id="3d">
            <NavLink
              to="/"
              onClick={() => {
                setCategorie('3d')
              }}
              className={
                categorie === '3d'
                  ? 'bg-primary text-secondary px-4 py-2 uppercase'
                  : 'bg-primary text-secondary hidden px-4 py-2 uppercase'
              }
            >
              3D Artst
            </NavLink>

            <NavLink
              to="/"
              onClick={() => {
                setCategorie('3d')
              }}
              className={
                categorie === '3d'
                  ? 'text-primary hidden bg-transparent px-4 py-2 uppercase'
                  : 'text-primary bg-transparent px-4 py-2 uppercase'
              }
            >
              3D Artst
            </NavLink>
          </div>
        </div>
        <div className="mx-auto">
          <a
            href=""
            className=" text-primary m-0 font-secondaryFont text-xl uppercase underline"
          >
            Visit
          </a>
        </div>
      </div>
      <div className="flex w-[8vh] flex-col justify-between">
        <div className="text-primary decoration-none flex flex-col items-end font-secondaryFont text-xl uppercase underline visited:text-white">
          <Link className="w-max" to="/">
            Home
          </Link>
          <Link className="w-max" to="/About">
            About
          </Link>
        </div>
        <div className=" text-primary decoration-none flex flex-col items-end font-secondaryFont text-xl uppercase underline visited:text-white">
          <a href="https://www.instagram.com/akkibi_/" className="w-max">
            Instagram
          </a>
          <a
            target="_top"
            href="mailto:akiravalade@gmail.com subject=Hello%20Akira"
            className="w-max"
          >
            Email
          </a>
          <a href="https://github.com/Akkibi" className="w-max">
            Github
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
