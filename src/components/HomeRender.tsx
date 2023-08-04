import { gsap } from 'gsap'
export const HomeComponent = (a: number, b: number): number => {
  console.log('HomeComponent')
  gsap.to('#nav', {
    duration: 1,
    ease: 'power3',
    x: 100,
  })
  return a + b
}
