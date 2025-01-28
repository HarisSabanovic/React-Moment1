

interface CardProps {
    martialArt: string, 
    info: string
}

function Card({martialArt, info} : CardProps) {
  return (
    <div className='card'>
        <h2>{martialArt}</h2>
        <p>{info}</p>
      </div>
  )
}

export default Card