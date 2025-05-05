import data from '../../datas/datas.json'
import '../../styles/card.scss'

function Card()
{
    return (
        <ul className='galleries'>
            {data.map((logement) => (
                <li className='card'>
                    <img src={logement.cover} alt="image-logement" />
                    <div className='card-title'>
                        <h2>{logement.title}</h2>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default Card