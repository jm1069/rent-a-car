import React from 'react'
import { useState, useEffect } from 'react';
import Sidebar from './UI/Sidebar'
import axios from 'axios';
import { BeatLoader } from 'react-spinners';
import CarCard from './CarCard';

export default function CarShowcase(){
    const[carData, setCarData] = useState([]);
    const[isLoading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCarData = axios.get('http://localhost:3000/cars')
            .then((response) => {
                setCarData(response.data);
                setLoading(false);
            })
    }, [])

    if(isLoading){
        return(
            <BeatLoader />
        )
    }

    if(!isLoading){
        console.log(carData.id);
        const cars = carData.map((car) => 
            <li key={car.id}>
                <CarCard name={car.manufacture}/>
            </li>
        );

        return(
            <div className='flex'>
                <Sidebar />
                <div className=''>
                    <h1>Our Vehicles</h1>
                    <ul>{cars}</ul>
                </div>  
            </div>
        )
    }
}