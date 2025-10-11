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
  console.log(onclick)
  useEffect(() => {
    if (showMenu) {
      setIsAnimating(true)
    }
  }, [showMenu])

  return (
    <div className={`title-section-container`} onClick={onClick}>
      <div
        className={`app ${onClick ? 'clickable' : ''}`}
        onMouseEnter={() => setShowMenu(true)}
        onMouseLeave={() => setShowMenu(false)}
        style={{
          cursor: onClick ? 'pointer' : 'default',
        }}
      >
        {name}
        {children && (showMenu || isAnimating) && (
          <div className={`menu ${showMenu ? 'open' : ''}`}>
            <hr
              style={{
                marginBottom: 0,
                width: '80%',
              }}
            />
            {children}
          </div>
        )}
      </div>
    </div>
  )
}
