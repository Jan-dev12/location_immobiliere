import { Link } from 'react-router-dom'
import data from '../../datas/datas.json'
import '../../styles/card.scss'

function Card()
{
    return (
        <ul className='galleries'>
            {data.map((logement) => (
                <Link key={logement.id} to={`/logement/${logement.id}`}>
                    <li className='card'>
                        <img src={logement.cover} alt="image-logement" />
                        <div className='card-title'>
                            <h2>{logement.title}</h2>
                        </div>
                    </li>
                </Link>
            ))}
        </ul>
    )
}

export default Card

// attestation de prolongation
// nouvelles date de fin 