import data from '../../datas/datas.json'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import '../../styles/fichelogement.scss'
import Collapse from '../../components/Collapse'
import RatingStars from '../../components/RatingStars'

function FicheLogement()
{
    const { id } = useParams() // récupère l'id dans l'URL
    const logement = data.find(item => item.id === id)

    const [currentIndex, setCurrentIndex] = useState(0)
    const pictures = logement.pictures

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length)
        }

    const goToPrev = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex - 1 + pictures.length) % pictures.length
        )
    }

    if (!logement) {
        return <h2>Logement non trouvé</h2>
    }

    return (
        <div className='logement-image'>
            <div className="carousel">
                <button className='gauche' onClick={goToPrev}>‹</button>
                <img
                src={pictures[currentIndex]}
                alt={`Photo ${currentIndex + 1}`}
                className="carousel-image"
                />
                <button className='droite' onClick={goToNext}>›</button>
            </div>

            <div className='logement-contenu'>
                <div>
                    <h2>{logement.title}</h2>  
                    <p>{logement.location}</p>

                    <div className="tags">
                        {logement.tags.map((tag, index) => (
                            <span key={index} className="tag">
                            {tag}
                            </span>
                        ))}
                    </div>
                </div>
                <div>
                    <div className='host'>
                        <p>{logement.host.name}</p>
                        <img className='photo-host' src={logement.host.picture} alt="photo-host" />
                    </div>
                    <RatingStars rating={logement.rating} />
                </div>
            </div>
            <div className='infos'>
                <Collapse 
                title='description'
                content={logement.description}
                />
                <Collapse 
                title='equipement'
                content={logement.equipments}
                />
            </div>
        </div>
    )
}

export default FicheLogement