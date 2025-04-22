import { Link } from 'react-router-dom'

function Header()
{
    return (
        <div>
            <h2>page du header</h2>
            <Link to="/">Accueil</Link>
            <Link to="/Apropos">A Propos</Link>
        </div>
    )
}

export default Header