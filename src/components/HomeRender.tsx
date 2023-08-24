import { gsap } from 'gsap'
export const HomeComponent = (): void => {
  console.log('HomeComponent')
  gsap.to('.track-image', {
    duration: 1,
    ease: 'power2',
    width: window.innerHeight * 0.15,
    opacity: 0.75,
    '-webkit-filter': 'grayscale(100%)',
    filter: 'grayscale(100%)',
  })
}
