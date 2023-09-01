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
      className="absolute z-50 h-full w-full -translate-x-full border border-solid border-white bg-[#111] text-white"
    >
      <h1>
        <Link className="text-white" to={'/'}>
          HOME
        </Link>
      </h1>
    </div>
  )
}

export default LoadAbout
