import { gsap } from 'gsap'

export const ColorsRender = (
  primary: string,
  secondary: string,
  speed: number
): void => {
  console.log('Change Colors')
  gsap.to('.text-primary', {
    duration: speed,
    color: primary,
    ease: 'power2',
  })
  gsap.to('.border-primary', {
    duration: speed,
    borderColor: primary,
    ease: 'power2',
  })
  gsap.to('.bg-primary', {
    duration: speed,
    backgroundColor: primary,
    ease: 'power2',
  })
  gsap.to('.text-secondary', {
    duration: speed,
    color: secondary,
    ease: 'power2',
  })
  gsap.to('.border-secondary', {
    duration: speed,
    borderColor: secondary,
    ease: 'power2',
  })
  gsap.to('.bg-secondary', {
    duration: speed,
    backgroundColor: secondary,
    ease: 'power2',
  })
  gsap.to('.secondary-shadow', {
    duration: speed,
    textShadow: `0.5vh 0.5vh 0px ${secondary}, -0.5vh -0.5vh 0px ${secondary}, 0.5vh -0.5vh 0px ${secondary}, -0.5vh 0.5vh 0px ${secondary}`,
    ease: 'power2',
  })
  gsap.to('.transparent-secondary', {
    duration: speed,
    backgroundColor: `${secondary}dd`,
    ease: 'power2',
  })
}
