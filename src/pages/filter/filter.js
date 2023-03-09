import './filter.scss'
import milkpack from '../../components/our-best/milkpack.png'

function Filter () {
    return (
        <div className='filter__wrap'>
            <div className='filter_search'>
                <div className = 'search'>
                    <p>Looking for</p>
                    <form>
                        <input
                            type='text'
                            placeholder='start typing here...'
                            className='input'/>
                    </form>
                </div>
                <div className='filter'>
                    <p>Or filter</p>

                    <button type='button' className='button'>brazil</button>
                    <button type='button' className='button'>kenya</button>
                    <button type='button' className='button'>columbia</button>
                </div>
            </div>
            <div className = 'cards'>
                <div className = 'cards__e'> 
                    <img src={milkpack} alt='coffee'/>
                    <p>AROMISTICO Coffee 1 kg</p>
                    <p>brazil</p>
                    <p>6.99$</p>
                </div>
                <div className = 'cards__e'> 
                    <img src={milkpack} alt='coffee'/>
                    <p>AROMISTICO Coffee 1 kg</p>
                    <p>brazil</p>
                    <p>6.99$</p>
                </div>
                <div className = 'cards__e'> 
                    <img src={milkpack} alt='coffee'/>
                    <p>AROMISTICO Coffee 1 kg</p>
                    <p>brazil</p>
                    <p>6.99$</p>
                </div>
                <div className = 'cards__e'> 
                    <img src={milkpack} alt='coffee'/>
                    <p>AROMISTICO Coffee 1 kg</p>
                    <p>brazil</p>
                    <p>6.99$</p>
                </div>
                <div className = 'cards__e'> 
                    <img src={milkpack} alt='coffee'/>
                    <p>AROMISTICO Coffee 1 kg</p>
                    <p>brazil</p>
                    <p>6.99$</p>
                </div>
                <div className = 'cards__e'> 
                    <img src={milkpack} alt='coffee'/>
                    <p>AROMISTICO Coffee 1 kg</p>
                    <p>brazil</p>
                    <p>6.99$</p>
                </div>
            </div>
        </div>
    )
}

export default Filter;