import '../../styles/home.scss'
import Card from '../../components/Card'

function App() 
{
    return (
        <div>
            <h1 className='background-titre'>Chez vous, partout et ailleurs</h1>
            <div className='gallery'>
                <Card />
            </div>
        </div>
    )
}

export default App