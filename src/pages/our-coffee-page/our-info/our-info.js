import './our-info.scss'
import girl from './girl.jpg'
import Image from '../../../components/vector/vector';
import Filter from '../../filter/filter';

function Information () {
    return (
        <div className = 'info__bg'>
            <div className = 'info__wrap'>
                <div className='left__block'>
                    <img src={girl} alt ='girl'></img>
                </div>
                <div className='right__block'>
                    <h1>About Our Beans</h1>
                    <Image/>
                    <p>Extremity sweetness difficult behaviour he of. On</p>
                    <p>disposal of as landlord horrible.</p>

                    <p>Afraid at highly months do things on at. Situation</p>
                    <p>recommend objection do intention</p>
                    <p>so questions.</p>

                    <p>As greatly removed calling pleased improve an.</p>
                    <p> Last ask him cold feel</p>
                    <p>met spot shy want. Children me laughing we</p>
                    <p> prospect answered followed. At it went</p>
                    <p>is song that held help face.</p>
                </div>
            </div>
            <div className='flex-line'></div>
            <Filter/>
        </div>
    )
}

export default Information;