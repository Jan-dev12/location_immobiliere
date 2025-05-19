import data from '../../datas/datas.json'
import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import '../../styles/fichelogement.scss'
import Collapse from '../../components/Collapse'
import RatingStars from '../../components/RatingStars'

function FicheLogement() {
    const { id } = useParams()
    const navigate = useNavigate()
    const logement = data.find(item => item.id === id)

    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        if (!logement) {
            navigate('/Error')
        }
    }, [logement, navigate])

    //Empêche le rendu si logement est undefined
    if (!logement) {
        return null
    }

    const pictures = logement.pictures

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length)
    }

    const goToPrev = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex - 1 + pictures.length) % pictures.length
        )
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
                <div className='logement-host'>
                    <div className='host'>
                        <p>{logement.host.name}</p>
                        <img className='photo-host' src={logement.host.picture} alt="photo-host" />
                    </div>
                    <RatingStars rating={logement.rating} />
                </div>
            </div>
            <div className='infos'>
                <div className='infos-equipement&description'>
                    <Collapse 
                    title='description'
                    content={logement.description}
                    />
                </div>
                <div className='infos-equipement-description'>
                <Collapse className='test'
                    title='equipement'
                    content={
                        Array.isArray(logement.equipments) && logement.equipments.length > 0 ? (
                        logement.equipments.map((item, index) => (
                            <p key={index}>{item}</p>
                        ))
                        ) : (
                        <p>Aucun équipement renseigné.</p>
                        )
                    }
                />
                </div>
            </div>
        </div>
    )
}

export default FicheLogement