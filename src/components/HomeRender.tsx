import { gsap } from 'gsap'
export const HomeComponent = (): void => {
  console.log('HomeComponent')
  gsap.to('.track-image', {
    duration: 1,
    ease: 'power2',
    width: window.innerHeight * 0.15,
    opacity: 0.75,
    '-webkit-filter': 'grayscale(100%)',
    filter: 'grayscale(100%)',
  })
  gsap.to('#scrollIcon', {
    duration: 1,
    ease: 'power2',
    opacity: 0,
    display: 'hidden',
  })

  function getTranslateX(element: HTMLElement) {
    var style = window.getComputedStyle(element)
    var matrix = new WebKitCSSMatrix(style.transform)
    console.log('translateX: ', matrix.m41)
  }

  const slideTranslate: HTMLElement | null =
    document.getElementById('slide-track')
  if (slideTranslate) {
    gsap.to('.slide-track', {
      duration: 0.5,
      transform: `translate(${getTranslateX(slideTranslate)}-50%)`,
      ease: 'power2',
    })
  }
}
