import { useNavigationType } from 'react-router-dom'
import { useEffect } from 'react'

function LoadAnimation({ anim }: { anim: Function }) {
  const navigationType: string | null = useNavigationType()

  useEffect(() => {
    if (navigationType === 'POP') {
      anim(1, 2)
    }
  })
  if (navigationType !== 'POP') {
    anim(1, 2)
  }
  return <div>{navigationType}</div>
}

export default LoadAnimation
