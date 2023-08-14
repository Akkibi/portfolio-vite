import { gsap } from 'gsap'
export const AboutComponent = (): void => {
  console.log('AboutComponent')
  gsap.to('#nav', {
    duration: 1,
    ease: 'power2',
    x: 250,
  })
}
