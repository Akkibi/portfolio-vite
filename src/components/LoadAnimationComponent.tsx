import { useNavigationType } from 'react-router-dom'
import { useEffect } from 'react'
import { ColorsRender } from './changeColors'
function LoadAnimation({ anim }: { anim: Function }) {
  const navigationType: string | null = useNavigationType()

  useEffect(() => {
    if (navigationType === 'POP') {
      anim()
      ColorsRender('#fff', '#111', 0.1)
    }
  })
  if (navigationType !== 'POP') {
    anim()
    ColorsRender('#fff', '#111', 0.1)
  }
  return <div></div>
}

export default LoadAnimation
