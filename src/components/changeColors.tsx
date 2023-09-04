import { gsap } from 'gsap'
export const ColorsRender = (
  primary: string,
  secondary: string,
  speed: number
): void => {
  console.log('Change Colors')
  var tlColors = gsap.timeline()
  tlColors
    .to('.text-primary', {
      duration: speed,
      color: primary,
      ease: 'power2',
    })
    .to(
      '.border-primary',
      {
        duration: speed,
        border: `1px solid ${primary}`,
        ease: 'power2',
        overwrite: true,
      },
      '<'
    )
    .to(
      '.bg-primary',
      {
        duration: speed,
        backgroundColor: primary,
        ease: 'power2',
        overwrite: true,
      },
      '<'
    )
    .to(
      '.text-secondary',
      {
        duration: speed,
        color: secondary,
        ease: 'power2',
      },
      '<'
    )
    .to(
      '.border-secondary',
      {
        duration: speed,
        borderColor: secondary,
        ease: 'power2',
        overwrite: true,
      },
      '<'
    )
    .to(
      '.bg-secondary',
      {
        duration: speed,
        backgroundColor: secondary,
        ease: 'power2',
        overwrite: true,
      },
      '<'
    )
    .to(
      '.secondary-shadow',
      {
        duration: speed,
        textShadow: `0.5vh 0.5vh 0px ${secondary}, -0.5vh -0.5vh 0px ${secondary}, 0.5vh -0.5vh 0px ${secondary}, -0.5vh 0.5vh 0px ${secondary}`,
        ease: 'power2',
      },
      '<'
    )
    .to(
      '.transparent-secondary',
      {
        duration: speed,
        backgroundColor: `${secondary}dd`,
        ease: 'power2',
        overwrite: true,
      },
      '<'
    )
}
