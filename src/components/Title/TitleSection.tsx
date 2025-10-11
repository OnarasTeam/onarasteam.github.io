import { useState, useEffect, type ReactElement } from 'react'
import './TitleSection.css'
import type { SubtitleProps } from './Subsection'

interface TitleScreenProps {
  name: string
  children?: ReactElement<SubtitleProps> | ReactElement<SubtitleProps>[]
}

export default function TitleSection({ name, children }: TitleScreenProps) {
  const [showMenu, setShowMenu] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (showMenu) {
      setIsAnimating(true)
    }
  }, [showMenu])

  return (
    <div className='title-section-container'>
      <div
        className={`app`}
        onMouseEnter={() => setShowMenu(true)}
        onMouseLeave={() => setShowMenu(false)}
        style={{
          cursor: children ? 'default' : 'pointer',
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
