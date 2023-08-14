import { gsap } from 'gsap'

export const ProjectRender = (projectIndex: number, index: number): void => {
  console.log('HomeComponent')
  gsap.to('#nav', {
    duration: 0.5,
    ease: 'power2',
    x: 25 * projectIndex + index * 3,
  })

  // Add a class to the selected .track-image element
  const notSelectedImage = document.querySelectorAll('.track-image')
  const selectedImage =
    document.querySelectorAll('.track-image')[projectIndex - 1]

  gsap.to(notSelectedImage, {
    duration: 0.5,
    width: window.innerHeight * 0.1,
    ease: 'power2',
  })
  gsap.to(selectedImage, {
    duration: 0.5,
    width: window.innerHeight * 0.85,
    ease: 'power2',
  })
  // gsap.to('#slide-track', {
  //   duration: 0.5,
  //   ease: 'power2',
  //   scale: 1.2,
  // });
}
