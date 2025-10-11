import './TitleSection.css'

interface TitleScreenProps {
  name: string
}

export default function TitleSection({ name }: TitleScreenProps) {
  return <div className='app'>{name}</div>
}
