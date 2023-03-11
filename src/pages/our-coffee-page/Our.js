import './Our.scss'


import Information from './our-info/our-info';
import Footer from '../../components/footer/footer';
import { Component } from 'react';

class Our extends Component() {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {country: 'brazil'},
                {country: 'brazil'},
                {country: 'brazil'},
                {country: 'brazil'},
                {country: 'columbia'},
                {country: 'kenya'},
            ]
        }
    }


    render () {
        return (
        
            <>
                <div className='our__bg'>
                    <h1>Our coffee</h1>
                </div>
                <Information
                    data={this.state.data}/>
                <Footer/>
            </>
        )

    }
}

export default Our;