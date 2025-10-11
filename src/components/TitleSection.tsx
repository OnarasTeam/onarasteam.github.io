import './TitleSection.css'

interface TitleScreenProps {
  name: string
}

export default function TitleSection({ name }: TitleScreenProps) {
  function onHover() {
    console.log('YAMETE KUDASAI')
  }

  return (
    <div className='title-section-container'>
      <div className='app' onMouseEnter={onHover}>
        {name}
        <div className='menu'>
          <div
            style={{
              width: '1vw',
              height: '1vh',
            }}
          />
          <div>Prueba 1</div>
          <div>Prueba 1</div>
          <div>Prueba 1</div>
          <div>Prueba 1</div>
        </div>
      </div>
    </div>
  )
}
