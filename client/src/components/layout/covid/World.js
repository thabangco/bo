import React, { Component } from 'react'
import axios from 'axios'
import CountUp from 'react-countup'

// url to use to fetch World data
const world_data = 'https://corona.lmao.ninja/countries?sort=cases&&limit=10';

class World extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mWorking: false,
            mCountries: [],
        };
    }

    componentDidMount() {

        this.getCountries();
        this.timer = setInterval(() => this.getCountries(), 300*1000); // fetch data after every x amount of time || eventually update component based on new data triggered in the api

    }
    UNSAFE_componentWillMount() {

        // Stop and set the timer to null
        clearInterval(this.timer);
        this.timer = null;
    }

    // function to fetch our data
    getCountries = () => {

        this.setState({ ...this.state, mWorking: true });

        axios.get(world_data)
            .then(res => {
                this.setState({ mCountries: res.data.slice(0, 5), mWorking: false })
                //console.log('countries', this.state.mCountries)
            })
            .catch(e => {
                console.log('...', e)
                this.setState({ ...this.state, mWorking: false });
            })
    }

    drawCountries = () => {

        const { mCountries } = this.state
        return (
            // no idea what this '<>' are called in react, but they work like magic
            mCountries.map(country_on =>
                <>
                    <tr id={country_on.countryInfo._id} key={country_on.id}>
                        <td><img src={country_on.countryInfo.flag} alt={country_on.country} width='20' /></td>
                        <td><label className='font-weight-bold small'>{ country_on.country }</label></td>
                        <td><label className='font-weight-bold small'><CountUp start={0} end={ country_on.cases} /></label></td>
                        <td><label className='font-weight-bold small'><CountUp start={0} end={ country_on.recovered}/></label></td>
                        <td><label className='font-weight-bold small'><CountUp start={0} end={ country_on.deaths}/></label></td>
                        <td><label className='font-weight-bold small'><CountUp start={0} end={ country_on.casesPerOneMillion}/></label></td>
                    </tr>
                </>
            )
        )
    }

    render() {

        const { mWorking } = this.state

        if (mWorking) {
            return <p>working.</p>
        }

        return (
            <div className='row py-1'>
                <div className='col-sm-12 py-4'>
                    <p className='text-muted'><span role="img" aria-label=''>&#128506;</span> <b>rest of the world &mdash; 5 highest infected countries.</b></p>
                    <div className='card shadow-lg'>
                        <div className='table-responsive'>
                            <table className='table'>
                                <thead className='cool' style={{ padding: '1.5rem' }}>
                                    <tr>
                                        <th><label className='m-0'><span role="img" aria-label=''>&#127757;</span></label></th>
                                        <th><label className='m-0 font-weight-bold small'>Location</label></th>
                                        <th><label className='m-0 font-weight-bold small'>Confirmed</label></th>
                                        <th><label className='m-0 font-weight-bold small'>Recovered</label></th>
                                        <th><label className='m-0 font-weight-bold small'>Deaths</label></th>
                                        <th><label className='m-0 font-weight-bold small'>Cases per 1 million people</label></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { !mWorking ? this.drawCountries() : 'working' }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default World;