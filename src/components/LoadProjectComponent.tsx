import { useNavigationType } from 'react-router-dom'
import { useEffect } from 'react'
import { ProjectRender } from './ProjectRender'
import { gsap } from 'gsap'
import { ColorsRender } from './changeColors'
import { useRef } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

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
  countData,
  projectList,
}: {
  projectData: Project
  projectIndex: number
  index: number
  countData: Array<number>
  projectList: Array<string>
}) {
  function alignImage(projectIndex: number, index: number, x: MediaQueryList) {
    let selectedWidth: number = window.innerWidth
    if (!x.matches) {
      selectedWidth = window.innerWidth * 0.85
    }
    const track = document.getElementById('slide-track')
    const image: HTMLElement | null = document.querySelector('.track-image')
    const title: HTMLElement | null = document.querySelector('.track-title')
    if (track !== null && image !== null && title !== null) {
      const offset =
        window.innerHeight * 0.1 * (projectIndex - 1) +
        title.getBoundingClientRect().width * index +
        (projectIndex + index - 1) * 16 +
        selectedWidth / 2

      const trackWidth =
        window.innerHeight * 0.1 * (countData[3] - 1) +
        title.getBoundingClientRect().width * 3 +
        (countData[3] + 3 - 1) * 16 +
        selectedWidth

      const offsetPercent = (offset / trackWidth) * -100
      gsap.to(track, {
        duration: 0.5,
        x: offsetPercent + '%',
        y: '-50%',
        ease: 'linear',
        overwrite: true,
      })
      console.log(offsetPercent)
    }
  }
  const navigationType: string | null = useNavigationType()
  const project = projectData

  var x: MediaQueryList = window.matchMedia('(max-width: 768px)')

  useEffect(() => {
    if (navigationType === 'POP') {
      alignImage(projectIndex, index, x)
      ColorsRender(project.colors[0], project.colors[1], 1)
      ProjectRender(projectIndex, index, x)
    }
  }, [])

  if (navigationType !== 'POP') {
    alignImage(projectIndex, index, x)
    ColorsRender(project.colors[0], project.colors[1], 1)
    ProjectRender(projectIndex, index, x)
  }
  useEffect(() => {
    ColorsRender(project.colors[0], project.colors[1], 1)
  }, [document.getElementById('projectTitle')])

  const scrollableRef = useRef<HTMLDivElement>(null)

  const [isAtTop, setIsAtTop] = useState(true)
  console.log('set ISATTOP', isAtTop)
  useEffect(() => {
    console.log('state ISATTOP', isAtTop)
  }, [isAtTop])

  if (scrollableRef.current) {
    if (isAtTop) {
      gsap.to(scrollableRef.current, {
        duration: 0.5,
        ease: 'power2',
        y: '150%',
        scale: 2,
      })
      gsap.to('#slide-track', {
        duration: 0.5,
        ease: 'power2',
        y: '-50%',
      })
    }
    if (!isAtTop) {
      gsap.to(scrollableRef.current, {
        duration: 0.5,
        ease: 'power2',
        y: '0%',
        scale: 1,
      })
      gsap.to('#slide-track', {
        duration: 0.5,
        ease: 'power2',
        y: '-250%',
      })
      scrollableRef.current.scrollTop = 20
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
      setIsAtTop(scrollableRef.current.scrollTop <= 10)
    }
  }

  const handleWindowOnDown = (e: TouchEvent) => {
    const clientY = e.touches[0].clientY
    const clientX = e.touches[0].clientX
    if (scrollableRef.current) {
      scrollableRef.current.dataset.touchDownAtX = clientX.toString()
      scrollableRef.current.dataset.touchDownAtY = clientY.toString()
    }
  }
  const navigate = useNavigate()
  const handleWindowOnUp = (e: TouchEvent) => {
    if (isAtTop) {
      if (
        scrollableRef.current &&
        scrollableRef.current.dataset.touchDownAtY &&
        scrollableRef.current.dataset.touchDownAtX &&
        Math.abs(
          e.changedTouches[0].clientY -
            parseFloat(scrollableRef.current.dataset.touchDownAtY)
        ) <
          Math.abs(
            e.changedTouches[0].clientX -
              parseFloat(scrollableRef.current.dataset.touchDownAtX)
          ) &&
        e.changedTouches[0].clientX <
          parseFloat(scrollableRef.current.dataset.touchDownAtX) &&
        projectIndex < projectList.length
      ) {
        navigate('/' + projectList[projectIndex])
        return
      }
      if (
        scrollableRef.current &&
        scrollableRef.current.dataset.touchDownAtY &&
        scrollableRef.current.dataset.touchDownAtX &&
        Math.abs(
          e.changedTouches[0].clientY -
            parseFloat(scrollableRef.current.dataset.touchDownAtY)
        ) <
          Math.abs(
            e.changedTouches[0].clientX -
              parseFloat(scrollableRef.current.dataset.touchDownAtX)
          ) &&
        e.changedTouches[0].clientX >
          parseFloat(scrollableRef.current.dataset.touchDownAtX) &&
        projectIndex > 1
      ) {
        navigate('/' + projectList[projectIndex - 2])
      }
      if (
        scrollableRef.current &&
        scrollableRef.current.dataset.touchDownAtY &&
        scrollableRef.current.dataset.touchDownAtX &&
        Math.abs(
          e.changedTouches[0].clientY -
            parseFloat(scrollableRef.current.dataset.touchDownAtY)
        ) >
          Math.abs(
            e.changedTouches[0].clientX -
              parseFloat(scrollableRef.current.dataset.touchDownAtX)
          ) &&
        e.changedTouches[0].clientY <
          parseFloat(scrollableRef.current.dataset.touchDownAtY)
      ) {
        setIsAtTop(false)
      }
    }
  }

  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === 'ArrowLeft' && projectIndex > 1) {
      navigate('/' + projectList[projectIndex - 2])
    }
    if (event.key === 'ArrowRight' && projectIndex < projectList.length) {
      navigate('/' + projectList[projectIndex])
    }
  }
  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress)
    if (scrollableRef.current) {
      scrollableRef.current.addEventListener('scroll', handleScroll)
      window.addEventListener('wheel', handleWindowScroll)
      window.addEventListener('touchstart', handleWindowOnDown)
      window.addEventListener('touchend', handleWindowOnUp)
      document.getElementById('scrollIcon')!.addEventListener('click', () => {
        setIsAtTop(false)
      })
      document
        .querySelectorAll('.unScrollIcon')[0]
        ?.addEventListener('click', () => {
          setIsAtTop(true)
        })
      document
        .querySelectorAll('.unScrollIcon')[1]
        ?.addEventListener('click', () => {
          setIsAtTop(true)
        })
    }

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
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
          .querySelectorAll('.unScrollIcon')[0]
          ?.removeEventListener('click', () => {
            setIsAtTop(true)
          })
        document
          .querySelectorAll('.unScrollIcon')[1]
          ?.removeEventListener('click', () => {
            setIsAtTop(true)
          })
      }
    }
  }, [navigate, isAtTop])

  return (
    <div
      ref={scrollableRef}
      className="transparent-secondary absolute left-1/2 h-full w-screen -translate-x-1/2 translate-y-full scale-100 overflow-y-scroll py-[7.5vh] md:w-[80vw]"
    >
      <div className="mb-[7.5vh] w-full">
        <div className="unScrollIcon mx-auto w-max">
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
        src={`/assets/${project.name}/${project.images[0]}`}
        alt=""
        className="aspect-video w-full bg-center object-cover"
      />

      <div className="px-5 pb-10 pt-2">
        <h1
          className="text-primary m-0 font-primaryFont text-xxl sm:text-xxxl"
          id="projectTitle"
        >
          {project.title}
        </h1>
        <h2 className="text-primary text-xl sm:text-xxl">{project.date}</h2>
        <p className="text-primary font-secondaryFont">{project.description}</p>
        <a href={project.link[0]} className="text-primary underline">
          {project.link[1]}
        </a>
      </div>
      {project.videos.map((video, index) => {
        return (
          <div key={index} className="aspect-video w-full">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${video}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share"
              allowFullScreen
            ></iframe>
          </div>
        )
      })}
      <div className="grid grid-cols-2 gap-2">
        {project.images.map((image, index) => {
          if (index > 1) {
            return (
              <img
                key={index}
                src={`/assets/${project.name}/${image}`}
                alt=""
                className="object-fit z-10 aspect-square w-full object-contain md:aspect-video"
              />
            )
          }
        })}
      </div>
      <div className="mt-[7.5vh] w-full">
        <div className="unScrollIcon mx-auto w-max">
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
    </div>
  )
}

export default LoadProjectComponent
