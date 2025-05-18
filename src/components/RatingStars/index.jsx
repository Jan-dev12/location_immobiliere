import fullstar from '../../assets/fullstar.png'
import emptystar from '../../assets/emptystar.png'
import '../../styles/ratingstars.scss'

function RatingStars({rating})
{
    const totalStars = 5
    const filledStars = parseInt(rating)

    return (
        <div className="rating">
        {[...Array(totalStars)].map((_, index) => (
            <img
            key={index}
            src={index < filledStars ? fullstar : emptystar}
            alt={index < filledStars ? 'étoile remplie' : 'étoile vide'}
            className="star"
          />
        ))}
        </div>
    )
}

export default RatingStars