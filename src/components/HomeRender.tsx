import { gsap } from 'gsap'
export const HomeComponent = (): void => {
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
}
