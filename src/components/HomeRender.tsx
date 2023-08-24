import { gsap } from 'gsap'
export const HomeComponent = (): void => {
  console.log('HomeComponent')
  gsap.to('#nav', {
    duration: 0.5,
    ease: 'power2',
    x: 0,
  })
  gsap.to('.track-image', {
    duration: 1,
    ease: 'power2',
    width: window.innerHeight * 0.15,
    opacity: 0.75,
    '-webkit-filter': 'grayscale(100%)',
    filter: 'grayscale(100%)',
  })
  gsap.to('#slide-track', {
    duration: 1,
    ease: 'power2',
    x: -235.224,
  })
  gsap.to('.thumbnail', {
    duration: 1,
    ease: 'power2',
    objectPosition: '92.2% center',
  })
}
