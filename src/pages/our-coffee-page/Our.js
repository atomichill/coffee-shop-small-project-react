import './Our.scss'


import Information from './our-info/our-info';
import Footer from '../../components/footer/footer';

function Our () {
    return (
        
        <>
            <div className='our__bg'>
                <h1>Our coffee</h1>
            </div>
            <Information/>
            <Footer/>
        </>
    )
}

export default Our;