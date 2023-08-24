import { useNavigationType } from 'react-router-dom'
import { useEffect, useContext } from 'react'
import { type } from 'os'
import { ProjectRender } from './ProjectRender'
import { gsap } from 'gsap'
import { ColorsRender } from './changeColors'

interface Project {
  name: string
  date: string
  title: string
  description: string
  images: string[]
  videos: string[]
  link: string[]
  colors: string[]
}

function LoadProjectComponent({
  projectData,
  projectIndex,
  index,
}: {
  projectData: Project
  projectIndex: number
  index: number
}) {
  function alignImage(projectIndex: number, index: number) {
    const track = document.getElementById('slide-track')
    const image: HTMLElement | null = document.querySelector('.track-image')
    const title: HTMLElement | null = document.querySelector('.track-title')
    if (track !== null && image !== null && title !== null) {
      const offset =
        window.innerHeight * 0.1 * (projectIndex - 1) +
        title.getBoundingClientRect().width * index +
        (projectIndex + index - 1) * 16 +
        (window.innerHeight * 0.85) / 2

      const offsetPercent =
        (offset / track.getBoundingClientRect().width) * -100
      gsap.to(track, {
        duration: 0.5,
        transform: `translate(${offsetPercent}%, -50%)`,
        ease: 'linear',
      })
      console.log(offsetPercent)
    }
  }
  const navigationType: string | null = useNavigationType()
  const project = projectData

  useEffect(() => {
    if (navigationType === 'POP') {
      alignImage(projectIndex, index)
      ColorsRender(project.colors[0], project.colors[1], 0.5)
      ProjectRender(projectIndex, index)
    }
  })
  if (navigationType !== 'POP') {
    alignImage(projectIndex, index)
    ColorsRender(project.colors[0], project.colors[1], 0.5)
    ProjectRender(projectIndex, index)
  }

  return (
    <div className="absolute left-1/2 top-1/2 h-full w-[80vw] -translate-x-1/2">
      <h1 className="text-primary">
        {projectIndex + ' ' + index + ' ' + project.title}
      </h1>
      <div className="bg-[rgba(0,0,0,0.5)] p-5">
        <p className="text-white">{project.description}</p>
      </div>
    </div>
  )
}

export default LoadProjectComponent
