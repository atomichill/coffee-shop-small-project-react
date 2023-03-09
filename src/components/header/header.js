import '../../restart.css'
import './header.scss';
import beans from './coffee-beans.svg'
import {Link, Outlet} from 'react-router-dom'

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
                                <Link to='/' className='link'>Coffee house</Link>
                            </li>
                            <li>
                                <Link to='our' className='link'>Our coffee</Link>
                            </li>
                        </div> 
                    </ul>
                </div>
            </header>

            <Outlet/>
        </>
    )
}

export default Header;