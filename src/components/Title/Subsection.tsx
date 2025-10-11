import type { ReactElement } from 'react'
import './TitleSection.css'

export interface SubtitleProps {
  name: string
}

export default function Subsection({ name }: SubtitleProps): ReactElement<SubtitleProps> {
  return <div className='menu-item'>{name}</div>
}
