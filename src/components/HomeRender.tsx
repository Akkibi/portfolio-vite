import { gsap } from 'gsap'
export const HomeComponent = (a: number, b: number): number => {
  console.log('HomeComponent')
  gsap.to('#nav', {
    duration: 0.5,
    ease: 'power2',
    x: 100,
  })
  gsap.to('.track-image', {
    duration: 1,
    ease: 'power2',
    width: window.innerHeight * 0.1,
  })
  gsap.to('#slide-track', {
    duration: 0.5,
    transform: 'translate(0,-50%)',
    overwrite: true,
    ease: 'power2',
  })
  gsap.to('.thumbnails', {
    duration: 0.5,
    objectPosition: `100% center`,
    overwrite: true,
  })
  // gsap.to('#slide-track', {
  //   duration: 0.5,
  //   ease: 'power2',
  //   scale: 1,
  // })
  return a + b
}
