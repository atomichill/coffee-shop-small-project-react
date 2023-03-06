import '../../restart.css'
import './header.scss';

function Header () {
    return (
        <>
            <header>
                <div className='header-wrap'>
                    <div>
                        <img src='../../img/coffee-beans.svg' alt='coffee beans'></img>
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