import { gsap } from 'gsap'
export const AboutComponent = (a: number, b: number): number => {
  console.log('AboutComponent')
  gsap.to('#nav', {
    duration: 1,
    ease: 'power2',
    x: 250,
  })
  return a + b
}
