import '../../restart.css'
import './header.scss';
import beans from './coffee-beans.svg'

function Header () {
    return (
        <>
            <header>
                <div className='header-wrap'>
                    <div>
                        <img src={beans} alt='coffee beans'></img>
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
                </div>
            </header>
        </>
    )
}

export default Header;