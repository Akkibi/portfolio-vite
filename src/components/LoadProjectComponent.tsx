import { useNavigationType } from 'react-router-dom'
import { useEffect } from 'react'
import { type } from 'os'
import { ProjectRender } from './ProjectRender'
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
  const navigationType: string | null = useNavigationType()
  const project = projectData
  useEffect(() => {
    if (navigationType === 'POP') {
      //my function animate
      ProjectRender(projectIndex + index * 3, 2)
    }
  })
  if (navigationType !== 'POP') {
    //my function animate
    ProjectRender(projectIndex + index * 3, 2)
  }
  return (
    <div>
      <h1>{projectIndex + ' ' + (index + 1) + ' ' + project.title}</h1>
      <p>{project.description}</p>
    </div>
  )
}

export default LoadProjectComponent
