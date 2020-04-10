import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Country = () => {
    const [country, setCountry] = useState([]);

    useEffect(() => {
        axios.get(`https://corona.lmao.ninja/all`).then(res => {
            const country = res.data;
            setCountry(country);
        });
    }, []);

    return (
        <div className='row py-9'>
            <div className='col-sm-3 py-4'>
                <div className='card shadow-lg'>
                    <div className='card-body'>
                        <p className='text-muted mb-0 small'>TOTAL CASES</p>
                        <h4>{country.cases}</h4>
                    </div>
                </div>
            </div>
            <div className='col-sm-3 py-4'>
                <div className='card shadow-lg'>
                    <div className='card-body'>
                        <p className='text-muted mb-0 small'>TOTAL DEATHS</p>
                        <h4>{country.deaths}</h4>
                    </div>
                </div>
            </div>
            <div className='col-sm-3 py-4'>
                <div className='card shadow-lg rounded'>
                    <div className='card-body'>
                        <p className='text-muted mb-0 small'>TOTAL RECOVERIES</p>
                        <h4>{country.recovered}</h4>
                    </div>
                </div>
            </div>
            <div className='col-sm-3 py-4'>
                <div className='card shadow-lg rounded'>
                    <div className='card-body'>
                        <p className='text-muted mb-0 small'>ACTIVE CASES</p>
                        <h4>{country.active}</h4>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Country;