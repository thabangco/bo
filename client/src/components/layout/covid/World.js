import React, { useState, useEffect } from 'react'
import axios from 'axios'

const World = () => {
    const [country, setCountry] = useState([]);

    useEffect(() => {
        axios.get(`https://corona.lmao.ninja/countries`).then(res => {
            const country = res.data;
            setCountry(country);
            setInterval(() => {
                setCountry(country);
            }, 20000) // run every 20 seconds
        });
    }, []);

    return (
    <div>
        <div className='row py-5'>
            <div className='col-sm-12 py-4'>
                <div className='card shadow-lg'>
    <table>{country.country}</table>
                </div>
            </div>
        </div>
    </div>
    )
};

export default World;