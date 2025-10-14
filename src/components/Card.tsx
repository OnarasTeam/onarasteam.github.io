import './Card.css'

interface CardProps {
  children: any
  id?: string
}

export default function Card({ id, children }: CardProps) {
  return (
    <div id={id} className='card'>
      {children}
    </div>
  )
}
