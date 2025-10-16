import type { CSSProperties } from 'react'
import './Card.css'

export interface CardProps {
  children: React.ReactNode
  id?: string
  className?: string
  gap?: number
  sx?: CSSProperties
}

export default function Card({ id, className, children, gap, sx }: CardProps) {
  return (
    <div id={id} style={{ ...sx, gap: gap }} className={`card ${className}`}>
      {children}
    </div>
  )
}
