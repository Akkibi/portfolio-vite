import { gsap } from 'gsap'

export const ProjectRender = (
  projectIndex: number,
  index: number,
  x: MediaQueryList
): void => {
  console.log('HomeComponent')
  let selectedWidth: number = window.innerWidth
  if (!x.matches) {
    selectedWidth = window.innerWidth * 0.85
  }
  // Add a class to the selected .track-image element
  const notSelectedImage = document.querySelectorAll('.track-image')
  const selectedImage =
    document.querySelectorAll('.track-image')[projectIndex - 1]
  console.log('Section', index)
  gsap.to(notSelectedImage, {
    duration: 0.5,
    width: window.innerHeight * 0.1,
    ease: 'power2',
    opacity: 0.75,

    '-webkit-filter': 'grayscale(100%)',
    filter: 'grayscale(100%)',
  })
  gsap.to(selectedImage, {
    duration: 0.5,
    width: selectedWidth,
    ease: 'power2',
    opacity: 1,
    grayScale: 0,
    '-webkit-filter': 'grayscale(0)',
    filter: 'grayscale(0)',
  })
  gsap.to('#scrollIcon', {
    duration: 0.75,
    ease: 'power2',
    opacity: 1,
    display: 'block',
  })
  gsap.to('.title', {
    duration: 1,
    ease: 'power2',
    x: 0,
    y: '-125%',
    rotation: -12,
  })
  gsap.to(`#title_${window.location.pathname.split('/').pop()}`, {
    duration: 1,
    ease: 'circular',
    x: 0,
    y: 0,
    rotation: 0,
  })
}
