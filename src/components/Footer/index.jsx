import logo from '../../assets/Kasa-footer.png'
import '../../styles/footer.scss'

function Footer()
{
    return (
        <div className='background-footer'>
            <div className='contenu-footer'>
                <h2><img src={logo} alt="Logo-Footer" className='logo-footer' /></h2>
                <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer