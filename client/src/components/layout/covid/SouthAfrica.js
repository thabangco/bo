import React, { Component } from 'react'
import axios from 'axios'
import makeNumber from '../../../utils/misc'

// url to use to fetch SA data
const southy_data = 'https://corona.lmao.ninja/countries/zaf';

class SouthAfrica extends Component{

    constructor(props) {
        super(props);
        this.state = {
            mWorking: false,
            mSouthy: [],
        };
    }

    componentDidMount() {

        this.getSouthy();
        this.timer = setInterval(() => this.getSouthy(), 100000000); // fetch data after every x amount of time || eventually update component based on new data triggered in the api
    }

    UNSAFE_componentWillMount() {

        // Stop and set the timer to null
        clearInterval(this.timer);
        this.timer = null;
    }

    // function to fetch our data
    getSouthy = () => {

        this.setState({ ...this.state, mWorking: true });

        axios.get(southy_data)
            .then(res => {
                this.setState({ mSouthy: res.data, mWorking: false })
            })
            .catch(e => {
                console.log('...', e)
                this.setState({ ...this.state, mWorking: false });
            })
    }

    render(){

        const { mSouthy, mWorking } = this.state

        return (
            <div className='row py-5'>
            <div className='col-sm-3 py-4'>
                <div className='card shadow-lg'>
                    <div className='card-body'>
                        <p className='text-muted mb-0'>TOTAL CASES</p>
                        <h4>{ !mWorking ? makeNumber(mSouthy.cases) : '...' }</h4>
                    </div>
                </div>
            </div>
            <div className='col-sm-3 py-4'>
                <div className='card shadow-lg'>
                    <div className='card-body'>
                        <p className='text-muted mb-0'>TOTAL DEATHS</p>
                        <h4>{ !mWorking ? makeNumber(mSouthy.deaths) : '...' }</h4>
                    </div>
                </div>
            </div>
            <div className='col-sm-3 py-4'>
                <div className='card shadow-lg rounded'>
                    <div className='card-body'>
                        <p className='text-muted mb-0'>TOTAL RECOVERIES</p>
                        <h4>{ !mWorking ? makeNumber(mSouthy.recovered) : '...' }</h4>
                    </div>
                </div>
            </div>
            <div className='col-sm-3 py-4'>
                <div className='card shadow-lg rounded'>
                    <div className='card-body'>
                        <p className='text-muted mb-0'>ACTIVE CASES</p>
                        <h4>{ !mWorking ? makeNumber(mSouthy.active) : '...' }</h4>
                    </div>
                </div>
            </div>
        </div>
        )
    }

}

export default SouthAfrica;