import './vector.scss'
import bean from './bean2.svg'

function Image () {
    return (
        <div className = 'img__wrap'>
            <div className = 'line'></div>
            <img className='img' src={bean} alt='beans'></img>
            <div className = 'line'></div>
        </div>
    )
}

export default Image;