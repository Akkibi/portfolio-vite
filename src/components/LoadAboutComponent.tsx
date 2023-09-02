import { useNavigationType } from 'react-router-dom'
import { useEffect } from 'react'
import { ColorsRender } from './changeColors'
import { Link } from 'react-router-dom'
function LoadAbout({ anim }: { anim: Function }) {
  const navigationType: string | null = useNavigationType()

  useEffect(() => {
    if (navigationType === 'POP') {
      anim()
      ColorsRender('#fff', '#111', 0.1)
    }
  })
  useEffect(() => {
    if (navigationType !== 'POP') {
      anim()
      ColorsRender('#fff', '#111', 0.1)
    }
  }, [document.getElementById('about')])
  return (
    <div
      id="about"
      className=" cover absolute z-50 h-full w-full -translate-x-full overflow-y-scroll bg-[#111] text-white"
    >
      <div className="grid-image absolute h-[80vh] w-full">
        <div
          className="h-full w-full bg-cover bg-center bg-no-repeat opacity-40"
          style={{
            backgroundImage: `
    url('akiravaladeillustration.png')`,
          }}
        ></div>
      </div>
      <h1 className=" text-primary relative m-0 w-max p-[4vh] font-primaryFont text-xxl uppercase">
        <Link to={'/'}>AKIRA VALADE</Link>
      </h1>
      <div className="relative px-2 text-xl sm:px-[16vw]">
        <h2 className="pb-[8vh] font-primaryFont text-xxxl">À propos</h2>
        <div className="w-full px-[4vw] py-[3vw] text-[4vw] leading-[5vw] sm:px-[3vw] sm:py-[2vw] sm:text-[3vw] md:text-[2vw] md:leading-[3vw] lg:text-[1.5vw] lg:leading-[2vw]">
          <p>
            Salut, je suis un développeur passionné de création 3D et de design
            web ainsi que fervent en code.
          </p>
          <br />
          <p>
            19 ans et actuellement en
            <b> fin de deuxième année </b>
            de DUT
            <a
              className="rounded-md bg-[rgba(0,0,0,0.25)] px-2 py-1 underline"
              href="https://iutmmi.fr/home/dut-mmi/dut-mmi-formation-pluridisciplinaire/"
            >
              <b>MMI</b>
            </a>
            , mes dernières experiences en entreprise sont:
          </p>
          <br />
          <ul className="list-disc pl-[4vw]">
            <li>
              Un stage chez
              <a
                className="rounded-md bg-[rgba(0,0,0,0.25)] p-1 px-2 underline"
                href="https://paymenowdigital.com/"
              >
                PAY ME NOW
              </a>
              ou j'ai fais le redesign du site slapping et créé le site du
              concours African Proud pour l'artiste
              <a
                className="rounded-md bg-[rgba(0,0,0,0.25)] p-1 px-2 underline"
                href="https://www.djmohgreen.com/"
              >
                DJ Moh Green
              </a>
            </li>
            <br />
            <li>
              Un CDD à
              <a
                className="rounded-md bg-[rgba(0,0,0,0.25)] px-2 py-1 underline"
                href="https://www.asiaworldmusic.fr/"
              >
                <b>Musica</b>
              </a>
              où j'ai
              <a
                className="rounded-md bg-[rgba(0,0,0,0.25)] p-1 px-2 underline"
                href="https://kpopcafe.eu/"
              >
                créé un site web de e-commerce
              </a>
              de a à z en groupe.
            </li>
          </ul>
          <br />
          <p>
            Ma passion pour la technologie et l'innovation me pousse à explorer
            les dernières avancées technologiques et à me tenir au courant des
            dernières tendances en matière de design.
          </p>
          <br />
          <p>
            Mes compétences en développement web évoluent constamment, je suis
            en cours d'aprentissage de Next.js et threejs. Ce portfolio est en
            cours de création, restez à l'affut des changements!
          </p>
        </div>
      </div>
      <footer className="body-font bg-black text-gray-400">
        <div className="container mx-auto flex flex-col items-center px-5 py-8 sm:flex-row">
          <a className="title-font flex items-center justify-center font-medium text-white md:justify-start">
            <img
              className="h-10 w-10 rounded-full text-white"
              src="favicon.ico"
              alt="icone du site"
            />
            <span className="ml-3 text-xl">Akira Valade</span>
          </a>
          <p className="text-sm mt-4 text-gray-400 sm:ml-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:pl-4">
            © 2020 —
            <a
              href="mailto:akiravalade@gmail.com"
              className="ml-1 text-gray-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              akiravalade@gmail.com
            </a>
          </p>
          <span className="mt-4 inline-flex justify-center sm:ml-auto sm:mt-0 sm:justify-start">
            <a
              href="https://www.instagram.com/akkibi_/"
              className="ml-3 text-gray-400"
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-5 w-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/akira-valade-60956b200/"
              className="ml-3 text-gray-400"
            >
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="h-5 w-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </footer>
    </div>
  )
}

export default LoadAbout
