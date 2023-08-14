import { FunctionComponent, useEffect, useRef } from 'react'
import projectData from '../data.json'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
const ThumbnailsComponent: FunctionComponent = () => {
  //onclick&drag
  const trackRef = useRef<HTMLDivElement>(null)

  const handleOnDown = (e: MouseEvent | TouchEvent) => {
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
    if (trackRef.current) {
      trackRef.current.dataset.mouseDownAt = clientX.toString()
    }
  }

  const handleOnUp = () => {
    if (trackRef.current) {
      trackRef.current.dataset.mouseDownAt = '0'
      trackRef.current.dataset.prevPercentage =
        trackRef.current.dataset.percentage
    }
  }

  const handleOnMove = (e: MouseEvent | TouchEvent) => {
    const title: HTMLElement | null = document.querySelector('.track-title')
    const image: HTMLElement | null = document.querySelector('.track-image')
    if (
      trackRef.current &&
      trackRef.current.dataset.mouseDownAt !== '0' &&
      trackRef.current.dataset.mouseDownAt !== undefined &&
      trackRef.current.dataset.prevPercentage !== undefined &&
      window.location.pathname === '/' &&
      title &&
      image
    ) {
      const min = 1
      // (title.getBoundingClientRect().width +
      //   image.getBoundingClientRect().width / 2) /
      // trackRef.current.getBoundingClientRect().width
      console.log(min)
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
      const mouseDelta =
        parseFloat(trackRef.current.dataset.mouseDownAt) - clientX
      const maxDelta = window.innerWidth * 1.5
      const percentage = (mouseDelta / maxDelta) * -100
      const nextPercentageUnconstrained =
        parseFloat(trackRef.current.dataset.prevPercentage) + percentage
      const nextPercentage = Math.max(
        Math.min(nextPercentageUnconstrained, min),
        -100
      )

      trackRef.current.dataset.percentage = nextPercentage.toString()

      makeSliderAnimation(trackRef.current, nextPercentage)
    }
  }

  //onscroll
  const transformScroll = (e: WheelEvent) => {
    const title: HTMLElement | null = document.querySelector('.track-title')
    const image: HTMLElement | null = document.querySelector('.track-image')
    if (
      trackRef.current &&
      e.deltaY &&
      trackRef.current.dataset.percentage &&
      window.location.pathname === '/' &&
      title &&
      image
    ) {
      const min =
        (title.getBoundingClientRect().width +
          image.getBoundingClientRect().width / 2) /
        trackRef.current.getBoundingClientRect().width
      console.log(
        title.getBoundingClientRect().width /
          trackRef.current.getBoundingClientRect().width
      )
      const percentage =
        parseFloat(trackRef.current.dataset.percentage) + e.deltaY / 5
      const nextPercentageUnconstrained = percentage
      const nextPercentage = Math.max(
        Math.min(nextPercentageUnconstrained, min),
        -100
      )
      trackRef.current.dataset.prevPercentage = nextPercentage.toString()
      makeSliderAnimation(trackRef.current, nextPercentage)
    }
  }

  function makeSliderAnimation(track: HTMLDivElement, nextValue: number) {
    track.dataset.percentage = nextValue.toString()

    // track.animate(
    //   {
    //     transform: `translate(${nextValue}%, -50%)`,
    //   },
    //   { duration: 1200, fill: 'forwards' }
    // )
    gsap.to(trackRef.current, {
      duration: 1,
      transform: `translate(${nextValue}%, -50%)`,
      ease: 'power2',
      overwrite: true,
    })
    const images = track.getElementsByClassName('thumbnail')
    for (const image of images) {
      // ;(image as HTMLElement).animate(
      //   {
      //     objectPosition: `${100 + nextValue}% center`,
      //   },
      //   { duration: 1200, fill: 'forwards' }
      // )
      gsap.to(image as HTMLElement, {
        duration: 1,
        objectPosition: `${100 + nextValue}% center`,
        ease: 'power2',
        overwrite: true,
      })
    }
  }

  useEffect(() => {
    if (trackRef.current) {
      trackRef.current.dataset.mouseDownAt = '0'
      trackRef.current.dataset.prevPercentage = '0'
      trackRef.current.dataset.percentage = '0'
      window.addEventListener('mousedown', handleOnDown)
      window.addEventListener('touchstart', handleOnDown)
      window.addEventListener('mouseup', handleOnUp)
      window.addEventListener('touchend', handleOnUp)
      window.addEventListener('mousemove', handleOnMove)
      window.addEventListener('touchmove', handleOnMove)
      window.addEventListener('wheel', transformScroll)
    }
    return () => {
      window.removeEventListener('wheel', transformScroll)
      window.removeEventListener('mousedown', handleOnDown)
      window.removeEventListener('touchstart', handleOnDown)
      window.removeEventListener('mouseup', handleOnUp)
      window.removeEventListener('touchend', handleOnUp)
      window.removeEventListener('mousemove', handleOnMove)
      window.removeEventListener('touchmove', handleOnMove)
    }
  }, [])

  const getFirstImageLink = (project: any, categoryName: string) => {
    const [projectName] = project.name.split('.')
    return {
      section: categoryName,
      name: projectName,
      image: `/assets/${projectName}/${project.images[0]}`,
    }
  }
  const getCategoryWithFirstImages = (data: any) => {
    const categoriesWithFirstImages = []
    for (const category in data) {
      const projects = data[category]
      const firstImages = projects.map((project: any) =>
        getFirstImageLink(project, category)
      )
      categoriesWithFirstImages.push({ category, firstImages })
    }
    return categoriesWithFirstImages
  }

  const projectsWithFirstImages = getCategoryWithFirstImages(projectData)
  return (
    <div
      id="slide-track"
      ref={trackRef}
      className="absolute left-1/2 top-1/2 flex -translate-y-1/2 select-none flex-row gap-4 text-white ease-out"
    >
      {projectsWithFirstImages.map((categoryData, index) => (
        <div key={index} className="flex flex-row gap-4">
          <div className="track-title relative m-0 h-[8vh] w-[8vh] -rotate-90 p-0 sm:h-[16vh] sm:w-[16vh]">
            <h2 className="text-primary absolute bottom-0 right-0 m-0 p-0 text-right text-xxl sm:text-xxxl">
              {categoryData.category.toUpperCase()}
            </h2>
          </div>
          <div className="relative flex flex-row gap-4">
            {categoryData.firstImages.map((data: any, projectIndex: number) => (
              <div
                key={projectIndex}
                className="track-image relative block h-[50vh] w-[10vh] overflow-hidden border-0 p-0 opacity-75 grayscale duration-100 hover:opacity-100 hover:grayscale-0"
              >
                <img
                  className="thumbnail absolute top-0 h-full w-full object-cover object-[center_100%] ease-out"
                  id={`imageBanner_${index}_${projectIndex}`}
                  src={data.image}
                  alt={`Banner_${index}_${projectIndex}`}
                />
                <Link
                  className=" absolute h-full w-full text-white no-underline"
                  to={data.name}
                >
                  <p className="absolute left-1/2 top-1/2 m-0 -translate-x-1/2 -translate-y-1/2 p-0 text-xl">
                    |
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default ThumbnailsComponent
