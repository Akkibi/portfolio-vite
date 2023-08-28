import { FunctionComponent, useState } from 'react'
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
        <p className="text-primary relative m-0 hidden w-max font-secondaryFont text-xl uppercase md:block">
          Développeur créatif front-end <br /> disponible à partir de septembre
        </p>
      </div>
      <div className="justify-betweens flex w-full flex-col justify-between">
        <div className="relative top-[70vh] mx-auto inline-flex w-2 flex-row justify-center gap-4 md:top-0">
          <div className="flex" id="dev">
            <NavLink
              to="/"
              onClick={() => {
                setCategorie('dev')
              }}
              className={
                categorie === 'dev'
                  ? ' bg-primary text-secondary w-max px-4 py-2 uppercase'
                  : ' bg-primary text-secondary hidden w-max px-4 py-2 uppercase'
              }
            >
              Developer
            </NavLink>
            <NavLink
              to="/"
              onClick={() => {
                setCategorie('dev')
              }}
              className={
                categorie === 'dev'
                  ? 'text-primary hidden w-max bg-transparent px-4 py-2 uppercase'
                  : 'text-primary w-max bg-transparent px-4 py-2 uppercase'
              }
            >
              Developer
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
                  ? 'bg-primary text-secondary w-max px-4 py-2 uppercase'
                  : 'bg-primary text-secondary hidden w-max px-4 py-2 uppercase'
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
                  ? 'text-primary hidden w-max bg-transparent px-4 py-2 uppercase'
                  : 'text-primary w-max bg-transparent px-4 py-2 uppercase'
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
                  ? 'bg-primary text-secondary w-max px-4 py-2 uppercase'
                  : 'bg-primary text-secondary hidden w-max px-4 py-2 uppercase'
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
                  ? 'text-primary hidden w-max bg-transparent px-4 py-2 uppercase'
                  : 'text-primary w-max bg-transparent px-4 py-2 uppercase'
              }
            >
              3D Artst
            </NavLink>
          </div>
        </div>
        <div className="mx-auto" id="scrollIcon">
          <p className="text-primary m-0 font-secondaryFont text-xxl uppercase underline">
            <svg
              className="mr-1 h-[4vh] w-[4vh]"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="4"></circle>
            </svg>
            <svg
              className="mr-1 h-[4vh] w-[4vh]"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M12 6V14"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M15 11L12 14L9 11"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </g>
            </svg>
          </p>
        </div>
      </div>
      <div className="flex w-[8vh] flex-col justify-between">
        <div className="text-primary decoration-none flex flex-col items-end font-secondaryFont text-xl uppercase underline visited:text-white">
          <a
            className="w-max"
            href="https://akkibi.github.io/portfolio/pages/About.html"
          >
            About
          </a>
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
