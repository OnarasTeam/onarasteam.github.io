import type { HTMLAttributes } from 'react'
import './Button.css'

interface ButtonProps {
  children: React.ReactNode
  zoomOnHover?: boolean
  onClick: () => void
  sx?: HTMLAttributes<HTMLButtonElement>
}

export default function Button({ children, onClick, zoomOnHover, sx }: ButtonProps) {
  return (
    <button style={sx} className='button' onClick={onClick}>
      <span className={`${zoomOnHover ? 'button-children' : ''}`}>{children}</span>
    </button>
  )
}
