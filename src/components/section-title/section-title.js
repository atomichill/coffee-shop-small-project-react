import './section-title.scss'
import vector from './Vector.svg'

function SectionTitle () {
    return (
        <section>
            <div className='section__title__wrap'>
                <h1>Everything You Love About Coffee</h1>
                <div className = 'img__wrap'>
                    <div className = 'line'></div>
                    <img className='img' src={vector} alt='beans'></img>
                    <div className = 'line'></div>
                </div>
                
                <p>We makes every day full of energy and taste</p>
                <p>Want to try our beans?</p>
                <button className='button'> More </button>
            </div>
        </section>
    )
}

export default SectionTitle;