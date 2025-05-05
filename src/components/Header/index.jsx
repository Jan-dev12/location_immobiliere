import { Link } from 'react-router-dom'
import logo from '../../assets/Kasa.png'
import '../../styles/header.scss'

function Header()
{
    return (
        <div className='header'>
            <h2><img src={logo} alt="Logo" className='logo' /></h2>
            <nav className='navigation'>
                <Link className='navigation-liens' to="/">Accueil</Link>
                <Link className='navigation-liens' to="/Apropos">A Propos</Link>
            </nav>
        </div>
    )
}

export default Header