import { gsap } from 'gsap'
export const ContactComponent = (a: number, b: number): number => {
  console.log('ContactComponent')
  gsap.to('#nav', {
    duration: 1,
    ease: 'power3',
    x: 500,
  })
  return a + b
}
