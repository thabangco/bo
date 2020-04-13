import React, { Component } from 'react'
import axios from 'axios'

// url to use to fetch SA data
const southy_data = 'https://covid-za-api.herokuapp.com/cases/confirmed';

class Country extends Component{

    constructor(props) {
        super(props);
        this.chartReference = React.createRef();
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

    componentDidUpdate(){
        
    }

    // function to fetch our data
    getSouthy = () => {

        this.setState({ ...this.state, mWorking: true });

        axios.get(southy_data)
            .then(res => {
                this.setState({ mSouthy: res.data, mWorking: false })
                console.log('...', res.data)
            })
            .catch(e => {
                console.log('...', e)
                this.setState({ ...this.state, mWorking: false });
            })
    }

    render(){

        const { mSouthy } = this.state
        let data = {mSouthy}

        return (
            <div className='row py-5'>
            <div className='col-sm-12 py-4'>
                <div className='card shadow-lg'>
                    <div className='card-body'>
                        { console.log(data.case_id) /** {data} TODO: draw a visual graph */ }
                    </div>
                </div>
            </div>
        </div>
        )
    }

}

export default Country;