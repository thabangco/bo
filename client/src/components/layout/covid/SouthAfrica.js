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
        this.timer = setInterval(() => this.getSouthy(), 300*1000); // fetch data after every x amount of time || eventually update component based on new data triggered in the api
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
                        <p className='gray-light mb-0 font-weight-bold'>confirmed</p>
                        <h4 className='gray-dark'>{ !mWorking ? makeNumber(mSouthy.cases) : '...' }</h4>
                    </div>
                </div>
            </div>
            <div className='col-sm-3 py-4'>
                <div className='card shadow-lg'>
                    <div className='card-body'>
                        <p className='gray-light mb-0 font-weight-bold'>deceased</p>
                        <h4 className='gray-dark'>{ !mWorking ? makeNumber(mSouthy.deaths) : '...' }</h4>
                    </div>
                </div>
            </div>
            <div className='col-sm-3 py-4'>
                <div className='card shadow-lg rounded'>
                    <div className='card-body'>
                        <p className='green-apple-2 mb-0 font-weight-bold'>recovered</p>
                        <h4 className='green-apple-2'>{ !mWorking ? makeNumber(mSouthy.recovered) : '...' }</h4>
                    </div>
                </div>
            </div>
            <div className='col-sm-3 py-4'>
                <div className='card shadow-lg rounded'>
                    <div className='card-body'>
                        <p className='gray-light mb-0 font-weight-bold'>active</p>
                        <h4 className='gray-dark'>{ !mWorking ? makeNumber(mSouthy.active) : '...' }</h4>
                    </div>
                </div>
            </div>
        </div>
        )
    }

}

export default SouthAfrica;