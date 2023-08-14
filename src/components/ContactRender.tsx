import { gsap } from 'gsap'
export const ContactComponent = (): void => {
  console.log('ContactComponent')
  gsap.to('#nav', {
    duration: 1,
    ease: 'power2',
    x: 500,
  })
}
