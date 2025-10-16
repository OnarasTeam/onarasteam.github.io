import { useState, useEffect, type ReactElement } from 'react'
import './TitleSection.css'

interface TitleScreenProps {
  name: string
  children?: ReactElement | ReactElement[]
  onClick?: () => void
}

export default function TitleSection({ name, children, onClick }: TitleScreenProps) {
  const [showMenu, setShowMenu] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [animationEnd, setAnimationEnd] = useState(false)

  useEffect(() => {
    if (showMenu) {
      setIsAnimating(true)
    }
  }, [showMenu])

  return (
    <div className={`title-section-container ${showMenu ? 'menu-active' : ''}`} onClick={onClick}>
      <div
        className={`section ${onClick ? 'clickable' : ''} ${children && (showMenu || animationEnd) ? 'open' : ''}`}
        onMouseEnter={() => setShowMenu(true)}
        onMouseLeave={() => setShowMenu(false)}
        style={{
          cursor: onClick ? 'pointer' : 'default',
        }}
      >
        <span className='section-text'>{name}</span>
        {children && (showMenu || isAnimating) && (
          <div
            className={`menu ${showMenu ? 'open' : ''}`}
            onTransitionStart={() => {
              console.log(children && showMenu && animationEnd)
              setAnimationEnd(true)
            }}
            onTransitionEnd={() => {
              console.log(children && showMenu && animationEnd)
              setAnimationEnd(false)
            }}
          >
            {children}
          </div>
        )}
      </div>
    </div>
  )
}
