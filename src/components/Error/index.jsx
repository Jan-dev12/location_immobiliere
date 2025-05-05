import { Link } from 'react-router-dom';
import '../../styles/error.scss'

function Error()
{
    return (
        <div className='error-contenu'>
            <h2 className='error-titre'>404</h2>
            <p className='error-phrase'>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/" className='retour-Home'>Retourner sur la page d’accueil</Link>
        </div>
    )
}

export default Error