import { useNavigationType } from 'react-router-dom'
import { useEffect } from 'react'
import { type } from 'os'
import { ProjectRender } from './ProjectRender'
import { gsap } from 'gsap'

interface Project {
  name: string
  date: string
  title: string
  description: string
  images: string[]
  videos: string[]
  link: string[]
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
        image.getBoundingClientRect().width * projectIndex +
        title.getBoundingClientRect().width * index +
        (projectIndex + index - 1) * 16 -
        image.getBoundingClientRect().width / 2

      const offsetPercent =
        (offset / track.getBoundingClientRect().width) * -100
      console.log(offsetPercent)
      console.log(offset)
      console.log(index)
      console.log(title.getBoundingClientRect().width)
      console.log(image.getBoundingClientRect().width)
      console.log(track.offsetWidth)
      gsap.to(track, {
        duration: 0.5,
        transform: `translate(${offsetPercent}%, -50%)`,
        ease: 'power2',
        overwrite: true,
      })
    }
  }
  const navigationType: string | null = useNavigationType()
  const project = projectData
  useEffect(() => {
    if (navigationType === 'POP') {
      //my function animate
      alignImage(projectIndex, index)
      ProjectRender(projectIndex + index * 3)
    }
  })
  if (navigationType !== 'POP') {
    //my function animate
    alignImage(projectIndex, index)
    ProjectRender(projectIndex + index * 3)
  }
  return (
    <div>
      <h1>{projectIndex + ' ' + index + ' ' + project.title}</h1>
      <p>{project.description}</p>
    </div>
  )
}

export default LoadProjectComponent
