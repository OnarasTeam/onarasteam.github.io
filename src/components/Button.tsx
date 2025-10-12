import type { ReactElement } from 'react'
import './Button.css'
interface ButtonProps {
  children: any
  zoomOnHover?: boolean
  onClick: () => void
}
export default function Button({ children, onClick, zoomOnHover }: ButtonProps) {
  return (
    <button className='button' onClick={onClick}>
      <span className={`${zoomOnHover ? 'button-children' : ''}`}>{children}</span>
    </button>
  )
}
