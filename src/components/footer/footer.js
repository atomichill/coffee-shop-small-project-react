import './footer.scss';
import blackbeans from './blackbeans.svg'
import vector from '../about-us/bean2.svg'

function Footer () {
    return (
        <div className='footer_wrap'>
            <div>
                <img src={blackbeans} alt='coffee beans'></img>
            </div>
            <ul>
                <div className='li-wrap'>
                    <li>
                        Coffee house
                    </li>
                    <li>
                        Our coffee
                    </li>
                    <li>
                        For your pleasure
                    </li>  
                </div> 
            </ul>

            <div className = 'img__wrap'>
                <div className = 'line'></div>
                <img className='img' src={vector} alt='beans'></img>
                <div className = 'line'></div>
            </div>
        </div>
    )
}

export default Footer;