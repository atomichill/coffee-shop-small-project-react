import './footer.scss';


import Image from '../vector/vector';

function Footer () {
    return (
        <div className='footer_wrap'>
            
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

            <Image/>
        </div>
    )
}

export default Footer;