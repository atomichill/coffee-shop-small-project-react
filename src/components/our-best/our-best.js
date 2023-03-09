import './our-best.scss';
import milk from './milk.png'
import pack from './pack.png'
import milkpack from './milkpack.png'

function Best () {
    return (
        <div className='best__bg'>
            <div className = 'best__wrap'>
                <h1> Our best</h1>
                <div className = 'element__wrap'>
                    <div className='element'>
                        <img src = {milk}  alt = 'packs'></img>
                        <p>Presto Coffee Beans 1 kg</p>
                        <p>15.99$</p>
                    </div>
                    <div className='element'>
                        <img src = {pack}  alt = 'packs'></img>
                        <p>Solimo Coffee Beans 2 kg</p>
                        <p>10.73$</p>
                    </div>
                    <div className='element'>
                        <img src = {milkpack}  alt = 'packs'></img>
                        <p>AROMISTICO Coffee 1 kg</p>
                        <p>6.99$</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Best;