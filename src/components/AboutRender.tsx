import { gsap } from 'gsap'
export const AboutComponent = (): void => {
  console.log('AboutComponent')

  gsap.to('#scrollIcon', {
    duration: 1,
    ease: 'power2',
    opacity: 0,
    display: 'hidden',
  })

  gsap.to('.slide-track', {
    duration: 0.5,
    transform: `translateY(-50%)`,
    ease: 'power2',
  })
}
