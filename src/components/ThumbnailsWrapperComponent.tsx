import { useEffect, useRef } from 'react'
import projectData from '../data.json'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { useNavigate } from 'react-router-dom'

const ThumbnailsComponent = ({
  countData,
  projectList,
}: {
  countData: Array<number>
  projectList: Array<string>
}) => {
  //onclick&drag
  const trackRef = useRef<HTMLDivElement>(null)
  const handleOnDown = (e: MouseEvent | TouchEvent) => {
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
    if (trackRef.current) {
      trackRef.current.dataset.mouseDownAt = clientX.toString()
    }
  }

  const handleOnUp = () => {
    if (
      trackRef.current &&
      window
        .getComputedStyle(trackRef.current)
        .transform.match(/matrix.*\((.+)\)/) !== null
    ) {
      trackRef.current.dataset.mouseDownAt = '0'
      trackRef.current.dataset.prevValue = trackRef.current.dataset.percentage
    }
  }

  const handleOnMove = (e: MouseEvent | TouchEvent) => {
    const title: HTMLElement | null = document.querySelector('.track-title')
    const image: HTMLElement | null = document.querySelector('.track-image')
    if (
      trackRef.current &&
      trackRef.current.dataset.mouseDownAt !== '0' &&
      trackRef.current.dataset.mouseDownAt !== undefined &&
      trackRef.current.dataset.prevValue !== undefined &&
      window.location.pathname === '/' &&
      title &&
      image
    ) {
      const min =
        ((title.getBoundingClientRect().width +
          16 +
          image.getBoundingClientRect().width / 2) /
          trackRef.current.getBoundingClientRect().width) *
        -100

      const max =
        ((trackRef.current.getBoundingClientRect().width -
          image.getBoundingClientRect().width / 2) /
          trackRef.current.getBoundingClientRect().width) *
        -100
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
      const mouseDelta =
        parseFloat(trackRef.current.dataset.mouseDownAt) - clientX
      const maxDelta = window.innerWidth * 1.5
      const percentage = (mouseDelta / maxDelta) * -100
      const nextPercentageUnconstrained =
        parseFloat(trackRef.current.dataset.prevValue) + percentage
      const nextPercentage = Math.max(
        Math.min(nextPercentageUnconstrained, min),
        max
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
        ((title.getBoundingClientRect().width +
          16 +
          image.getBoundingClientRect().width / 2) /
          trackRef.current.getBoundingClientRect().width) *
        -100

      const max =
        ((trackRef.current.getBoundingClientRect().width -
          image.getBoundingClientRect().width / 2) /
          trackRef.current.getBoundingClientRect().width) *
        -100

      const percentage =
        parseFloat(trackRef.current.dataset.percentage) + e.deltaY / 15
      const nextPercentageUnconstrained = percentage
      const nextPercentage = Math.max(
        Math.min(nextPercentageUnconstrained, min),
        max
      )
      trackRef.current.dataset.prevValue = nextPercentage.toString()
      makeSliderAnimation(trackRef.current, nextPercentage)
    }
  }

  const transformArrow = (quantity: number) => {
    const title: HTMLElement | null = document.querySelector('.track-title')
    const image: HTMLElement | null = document.querySelector('.track-image')
    if (
      trackRef.current &&
      quantity &&
      trackRef.current.dataset.percentage &&
      window.location.pathname === '/' &&
      title &&
      image
    ) {
      const min =
        ((title.getBoundingClientRect().width +
          16 +
          image.getBoundingClientRect().width / 2) /
          trackRef.current.getBoundingClientRect().width) *
        -100

      const max =
        ((trackRef.current.getBoundingClientRect().width -
          image.getBoundingClientRect().width / 2) /
          trackRef.current.getBoundingClientRect().width) *
        -100

      const percentage =
        parseFloat(trackRef.current.dataset.percentage) + quantity / 15
      const nextPercentageUnconstrained = percentage
      const nextPercentage = Math.max(
        Math.min(nextPercentageUnconstrained, min),
        max
      )
      trackRef.current.dataset.prevValue = nextPercentage.toString()
      makeSliderAnimation(trackRef.current, nextPercentage)
    }
  }

  function makeSliderAnimation(track: HTMLDivElement, nextValue: number) {
    track.dataset.percentage = nextValue.toString()

    gsap.to(trackRef.current, {
      duration: 0.5,
      x: nextValue + '%',
      y: '-50%',
      ease: 'power2',
      overwrite: true,
    })
    const images = track.getElementsByClassName('thumbnail')
    for (const image of images) {
      gsap.to(image as HTMLElement, {
        duration: 0.5,
        objectPosition: `${100 + nextValue}% center`,
        ease: 'power2',
        overwrite: true,
      })
    }
  }
  const alignCategory = (categoryName: string, countData: Array<number>) => {
    const title: HTMLElement | null = document.querySelector('.track-title')
    const categoryTitle: HTMLElement | null =
      document.getElementById(categoryName)
    if (
      trackRef.current &&
      trackRef.current.dataset.percentage &&
      categoryTitle &&
      title
    ) {
      const trackWidth =
        window.innerHeight * 0.15 * countData[3] +
        title.getBoundingClientRect().width * 3 +
        (countData[3] + 3 - 1) * 16
      console.log(
        'trackwidth',
        trackWidth,
        'old track width',
        trackRef.current.getBoundingClientRect().width
      )
      let categoryWidth: number = 16 + title.getBoundingClientRect().width
      console.log('categoryName', categoryName)
      if (categoryName === '2DArtist') {
        categoryWidth =
          countData[0] * window.innerHeight * 0.15 +
          countData[0] * 16 +
          title.getBoundingClientRect().width * 2 +
          16 * 2
      } else if (categoryName === '3DArtist') {
        categoryWidth =
          (countData[0] + countData[1]) * window.innerHeight * 0.15 +
          (countData[0] + countData[1]) * 16 +
          title.getBoundingClientRect().width * 3 +
          16 * 3
      }
      const min =
        ((categoryWidth + (window.innerHeight * 0.15) / 2) / trackWidth) * -100
      console.log('min', min)
      const time: number =
        Math.abs(
          parseFloat(trackRef.current.dataset.percentage) + Math.abs(min)
        ) /
          50 +
        0.5

      gsap.to('#slide-track', {
        duration: time,
        ease: 'circular.out',
        x: min + '%',
        y: '-50%',
        overwrite: true,
      })
      gsap.to('.thumbnail', {
        duration: time,
        ease: 'circular.out',
        objectPosition: `${100 + min}% center`,
        overwrite: true,
      })
      trackRef.current.dataset.categorie = categoryName
      trackRef.current.dataset.percentage = min.toString()
      trackRef.current.dataset.prevValue = min.toString()
    }
  }

  const handleKeyPress = (event: KeyboardEvent) => {
    if (trackRef.current) {
      if (event.key === 'ArrowLeft') {
        transformArrow(50)
      }
      if (event.key === 'ArrowRight') {
        transformArrow(-50)
      }
      if (event.key === 'ArrowUp') {
        alignCategory('Developer', countData)
      }
      if (
        (event.key === 'ArrowDown' && trackRef.current.dataset.percentage) ||
        (event.key === 'Enter' && trackRef.current.dataset.percentage)
      ) {
        console.log('project to open')
        console.log(projectList)
        navigate(
          '/' +
            projectList[
              Math.round(
                Math.abs(
                  (Math.round(parseFloat(trackRef.current.dataset.percentage)) /
                    100) *
                    countData[3]
                )
              ) - 1
            ]
        )
      }
    }
  }

  useEffect(() => {
    if (trackRef.current && document.getElementById('slide-track') !== null) {
      trackRef.current.dataset.mouseDownAt = '0'
      trackRef.current.dataset.prevValue = '-6.5'
      trackRef.current.dataset.percentage = '-6.5'
      window.addEventListener('keydown', handleKeyPress)
      window.addEventListener('mousedown', handleOnDown)
      window.addEventListener('touchstart', handleOnDown)
      window.addEventListener('mouseup', handleOnUp)
      window.addEventListener('touchend', handleOnUp)
      window.addEventListener('mousemove', handleOnMove)
      window.addEventListener('touchmove', handleOnMove)
      window.addEventListener('wheel', transformScroll)
      document
        .getElementById('dev')
        ?.addEventListener('click', () => alignCategory('Developer', countData))
      document
        .getElementById('2d')
        ?.addEventListener('click', () => alignCategory('2DArtist', countData))
      document
        .getElementById('3d')
        ?.addEventListener('click', () => alignCategory('3DArtist', countData))
    }
    return () => {
      document
        .getElementById('dev')
        ?.removeEventListener('click', () =>
          alignCategory('Developer', countData)
        )
      document
        .getElementById('2d')
        ?.removeEventListener('click', () =>
          alignCategory('2DArtist', countData)
        )
      document
        .getElementById('3d')
        ?.removeEventListener('click', () =>
          alignCategory('3DArtist', countData)
        )
      window.removeEventListener('keydown', handleKeyPress)
      window.removeEventListener('wheel', transformScroll)
      window.removeEventListener('mousedown', handleOnDown)
      window.removeEventListener('touchstart', handleOnDown)
      window.removeEventListener('mouseup', handleOnUp)
      window.removeEventListener('touchend', handleOnUp)
      window.removeEventListener('mousemove', handleOnMove)
      window.removeEventListener('touchmove', handleOnMove)
    }
  }, [])

  const navigate = useNavigate()

  // Adding event listeners for key press
  useEffect(() => {
    if (trackRef.current) {
      trackRef.current.dataset.categorie = 'Developer'
    }
    const handleKeyPress = (event: KeyboardEvent) => {
      if (trackRef.current && trackRef.current.dataset.categorie) {
        if (event.key === 'Escape') {
          navigate('/')
          alignCategory(trackRef.current.dataset.categorie, countData)
        }
      }
    }

    window.addEventListener('keydown', handleKeyPress)

    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [navigate])

  const getFirstImageLink = (project: any, categoryName: string) => {
    const [projectName] = project.name.split('.')
    return {
      section: categoryName,
      name: projectName,
      title: project.title,
      image: `/assets/${projectName}/thumbnail.png`,
      webpImage: `/assets/${projectName}/thumbnail.webp`,
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
    <div className="absolute top-1/2 h-[60vh] w-full -translate-y-1/2">
      <div
        id="slide-track"
        ref={trackRef}
        className="absolute left-1/2 top-1/2 flex -translate-x-[5.17%] select-none flex-row gap-4 text-white ease-out"
      >
        {projectsWithFirstImages.map((categoryData, index) => (
          <div key={index} className="flex flex-row gap-4">
            <div
              id={`${categoryData.category}`}
              className="track-title relative m-0 h-[16vh] w-[16vh] -rotate-90 p-0"
            >
              <h2 className=" text-primary absolute bottom-0 right-0 m-0 p-0 text-right text-xxxl opacity-50">
                {categoryData.category.toUpperCase()}
              </h2>
            </div>
            <div className="relative flex flex-row gap-4">
              {categoryData.firstImages.map(
                (data: any, projectIndex: number) => (
                  <div
                    key={projectIndex}
                    className="track-image relative block h-[50vh] w-[15vh] overflow-hidden border-0 p-0 hover:opacity-100 hover:grayscale-0"
                  >
                    <picture id={`imageBanner_${index}_${projectIndex}`}>
                      <source srcSet={data.webpImage} type="image/webp" />
                      <img
                        className="thumbnail absolute top-0 h-full w-full object-cover object-[center_center] duration-200 ease-out"
                        id={`imageBanner_${index}_${projectIndex}`}
                        src={data.image}
                        alt={`Banner_${index}_${projectIndex}`}
                      />
                    </picture>
                    <Link
                      className="track-link absolute h-full w-full bg-[rgba(0,0,0,0.25)] text-white no-underline grayscale duration-200 hover:bg-[rgba(0,0,0,0)] hover:grayscale-0"
                      to={data.name}
                    >
                      <p className="absolute left-1/2 top-1/2 m-0 -translate-x-1/2 -translate-y-1/2 p-0 text-xl ">
                        |
                      </p>
                    </Link>
                  </div>
                )
              )}
            </div>
          </div>
        ))}
      </div>
      <div
        className=" pointer-events-none absolute left-1/2 top-1/2 my-0 h-full w-full -translate-x-1/2 -translate-y-1/2 select-none overflow-clip py-0"
        id="titles"
      >
        {projectsWithFirstImages.map((categoryData, index) => (
          <div key={index} className="allTitles" id={`titles_${index}`}>
            {categoryData.firstImages.map((data: any, projectIndex: number) => (
              <h1
                key={projectIndex}
                id={`title_${data.name}`}
                className="title text-primary secondary-shadow absolute left-0 top-0 my-0 origin-left px-2 font-primaryFont text-xxxl md:px-[5vw] md:text-xxxxxl"
              >
                {data.title.toUpperCase()}
              </h1>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ThumbnailsComponent
