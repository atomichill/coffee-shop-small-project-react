import './section-title.scss'

function SectionTitle () {
    return (
        <section>
            <div className='section__title__wrap'>
                <h1>Everything You Love About Coffee</h1>
                <img className='img'></img>
                <p>We makes every day full of energy and taste</p>
                <p>Want to try our beans?</p>
                <button className='button'> More </button>
            </div>
        </section>
    )
}

export default SectionTitle;