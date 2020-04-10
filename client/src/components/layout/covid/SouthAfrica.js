import React, { useState, useEffect } from 'react'
import axios from 'axios'

const SouthAfrica = () => {
    const [country, setCountry] = useState([]);

    useEffect(() => {
        axios.get(`https://corona.lmao.ninja/countries/south africa`).then(res => {
            const country = res.data;
            setCountry(country);
            setInterval(() => {
                setCountry(country);
                console.log('triggered')
            }, 20000) // run every 20 seconds
        });
    }, []);

    return (
    <div>
        <div className='row py-5'>
            <div className='col-sm-3 py-4'>
                <div className='card shadow-lg'>
                    <div className='card-body'>
                        <p className='text-muted mb-0'>TOTAL CASES</p>
                        <h4>{country.cases}</h4>
                    </div>
                </div>
            </div>
            <div className='col-sm-3 py-4'>
                <div className='card shadow-lg'>
                    <div className='card-body'>
                        <p className='text-muted mb-0'>TOTAL DEATHS</p>
                        <h4>{country.deaths}</h4>
                    </div>
                </div>
            </div>
            <div className='col-sm-3 py-4'>
                <div className='card shadow-lg rounded'>
                    <div className='card-body'>
                        <p className='text-muted mb-0'>TOTAL RECOVERIES</p>
                        <h4>{country.recovered}</h4>
                    </div>
                </div>
            </div>
            <div className='col-sm-3 py-4'>
                <div className='card shadow-lg rounded'>
                    <div className='card-body'>
                        <p className='text-muted mb-0'>ACTIVE CASES</p>
                        <h4>{country.active}</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
};

export default SouthAfrica;