import { useNavigationType } from 'react-router-dom'
import { useEffect, useContext } from 'react'
import { type } from 'os'
import { ProjectRender } from './ProjectRender'
import { gsap } from 'gsap'
import { ColorsRender } from './changeColors'
import { useRef } from 'react'
import { useState } from 'react'

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
  useEffect(() => {
    ColorsRender(project.colors[0], project.colors[1], 0.5)
  }, [document.getElementById('projectTitle')])

  // scroll detect on project
  const scrollableRef = useRef<HTMLDivElement>(null) // Ref to your scrollable element
  const [isAtTop, setIsAtTop] = useState(true)

  //scroll animation
  if (scrollableRef.current) {
    if (isAtTop) {
      gsap.to(scrollableRef.current, {
        duration: 1,
        ease: 'power2',
        transform: 'translate(-50% ,100%)',
      })
    }
    if (!isAtTop) {
      gsap.to(scrollableRef.current, {
        duration: 1,
        ease: 'power2',
        transform: 'translate(-50% ,0%)',
      })
      scrollableRef.current.scrollTop = 10
    }
  }
  const handleWindowScroll = (e: WheelEvent) => {
    if (e.deltaY > 0 && isAtTop) {
      setIsAtTop(false)
    }
  }
  useEffect(() => {
    return () => {}
  }, [])
  const handleScroll = () => {
    if (scrollableRef.current) {
      setIsAtTop(scrollableRef.current.scrollTop <= 5)
    }
  }

  const handleWindowOnDown = (e: TouchEvent) => {
    const clientY = e.touches[0].clientY
    if (scrollableRef.current) {
      scrollableRef.current.dataset.touchDownAt = clientY.toString()
    }
  }
  const handleWindowOnUp = (e: TouchEvent) => {
    // if the difference of movement is positive, setIsAtTop(true)
    if (
      scrollableRef.current &&
      scrollableRef.current.dataset.touchDownAt &&
      e.changedTouches[0].clientY <
        parseFloat(scrollableRef.current.dataset.touchDownAt)
    ) {
      setIsAtTop(false)
    }
  }

  useEffect(() => {
    if (scrollableRef.current) {
      scrollableRef.current.addEventListener('scroll', handleScroll)
      window.addEventListener('wheel', handleWindowScroll)
      window.addEventListener('touchstart', handleWindowOnDown)
      window.addEventListener('touchend', handleWindowOnUp)
      document.getElementById('scrollIcon')!.addEventListener('click', () => {
        setIsAtTop(false)
      })
      document.getElementById('unScrollIcon')!.addEventListener('click', () => {
        setIsAtTop(true)
      })
    }

    return () => {
      if (scrollableRef.current) {
        scrollableRef.current.removeEventListener('scroll', handleScroll)
        window.removeEventListener('wheel', handleWindowScroll)
        window.removeEventListener('touchstart', handleWindowOnDown)
        window.removeEventListener('touchend', handleWindowOnUp)
        document
          .getElementById('scrollIcon')!
          .removeEventListener('click', () => {
            setIsAtTop(false)
          })
        document
          .getElementById('unScrollIcon')!
          .removeEventListener('click', () => {
            setIsAtTop(true)
          })
      }
    }
  }, [])

  return (
    <div
      ref={scrollableRef}
      className="absolute left-1/2 h-full w-screen -translate-x-1/2 translate-y-full overflow-y-scroll bg-[rgba(0,0,0,0.75)] py-[7.5vh] md:w-[80vw]"
    >
      <div className="mb-[7.5vh] w-full">
        <div className="mx-auto w-max" id="unScrollIcon">
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
              className="mr-1 h-[4vh] w-[4vh] rotate-180"
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
      <img
        src={`/assets/${project.name}/${project.images[1]}`}
        alt=""
        className="aspect-video w-full bg-center object-cover"
      />

      <div className="px-5 py-2">
        <h1 className="text-primary" id="projectTitle">
          {projectIndex + ' ' + index + ' ' + project.title}
        </h1>
        <h2 className="text-primary">{project.date}</h2>
        <p className="text-white">{project.description}</p>
      </div>
      {project.videos.map((video, index) => {
        return (
          <div key={index} className="aspect-video w-full">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${video}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        )
      })}
      <div className="grid grid-cols-2 gap-2">
        {project.images.map((image, index) => {
          if (index > 2) {
            return (
              <img
                key={index}
                src={`/assets/${project.name}/${image}`}
                alt=""
                className="aspect-square w-full bg-center object-cover md:aspect-video"
              />
            )
          }
        })}
      </div>
    </div>
  )
}

export default LoadProjectComponent
