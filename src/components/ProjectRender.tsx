import { gsap } from 'gsap'
export const ProjectRender = (a: number): void => {
  console.log('HomeComponent')
  gsap.to('#nav', {
    duration: 1,
    ease: 'power3',
    x: 25 * a,
  })
}
