import { useState, type ReactElement } from 'react'
import './TitleSection.css'
import { useSmallClassEM } from '../../hooks/SmallHooks'

interface TitleScreenProps {
  name: string
  children?: ReactElement | ReactElement[]
  onClick?: () => void
}

type MenuState = 'CLOSE' | 'OPENING' | 'OPEN' | 'CLOSING'

export default function TitleSection({ name, children, onClick }: TitleScreenProps) {
  const [menuState, setMenuState] = useState<MenuState>('CLOSE')
  const small = useSmallClassEM()

  function isMenuOpen() {
    return menuState === 'OPEN' || menuState === 'OPENING'
  }

  return (
    <div
      className={`title-section-container ${menuState !== 'CLOSE' ? 'highlighted' : ''}`}
      onClick={onClick}
    >
      <div
        className={`section ${small} ${onClick ? 'clickable' : ''} ${children && menuState !== 'CLOSE' ? 'open' : ''}`}
        onMouseEnter={() => {
          if (children) setMenuState('OPENING')
        }}
        onMouseLeave={() => {
          if (children) setMenuState('CLOSING')
        }}
        style={{
          cursor: onClick ? 'pointer' : 'default',
        }}
      >
        <span className='section-text'>{name}</span>
        {children && (
          <>
            <div
              style={{
                width: 'calc(5em + 40px)',
                top: 'calc(1.5em + 50px)',
                left: '50%',
                transform: 'translateX(-50%)',
                position: 'absolute',
                backgroundColor: 'transparent',
                height: '0.5em',
              }}
            />
            <div
              className={`menu ${small} ${isMenuOpen() ? 'open' : ''}`}
              onTransitionEnd={() => {
                if (menuState === 'OPENING') setMenuState('OPEN')
                if (menuState === 'CLOSING') setMenuState('CLOSE')
              }}
            >
              {/* Invisible */}
              {children}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
