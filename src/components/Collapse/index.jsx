import { useState } from 'react';
import '../../styles/collapse.scss'
import fleche from '../../assets/fleche.png'

function Collapse({title, content})
{
    const [isOpen, setIsOpen] = useState(false)

    return(
        
        <div className="dropdown">
            <button onClick={() => setIsOpen(!isOpen)} className="dropdown-btn">
                {title}
                <span className={`arrow ${isOpen ? 'open' : ''}`}><img src={fleche} alt='fleche'/></span>
            </button>

            {isOpen && (
                <p className="dropdown-list">
                    {content}
                </p>
            )}
        </div>
    )
}

export default Collapse