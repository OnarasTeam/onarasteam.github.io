import type { ReactElement } from 'react'
import './Button.css'
interface ButtonProps {
  children: any
  onClick: () => void
}
export default function Button({ children, onClick }: ButtonProps) {
  return (
    <button className='button' onClick={onClick}>
      {children}
    </button>
  )
}
