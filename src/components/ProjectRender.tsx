import { gsap } from 'gsap'

export const ProjectRender = (projectIndex: number, index: number): void => {
  console.log('HomeComponent')

  // Add a class to the selected .track-image element
  const notSelectedImage = document.querySelectorAll('.track-image')
  const selectedImage =
    document.querySelectorAll('.track-image')[projectIndex - 1]
  console.log(index)
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
    width: window.innerHeight * 0.85,
    ease: 'power2',
    opacity: 1,
    grayScale: 0,
    '-webkit-filter': 'grayscale(0)',
    filter: 'grayscale(0)',
  })
  gsap.to('#scrollIcon', {
    duration: 1,
    ease: 'power2',
    opacity: 1,
    display: 'block',
  })
}
