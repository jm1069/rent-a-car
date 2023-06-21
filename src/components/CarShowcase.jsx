import React from 'react'
import { useState, useEffect } from 'react';
import Sidebar from './UI/Sidebar'
import axios from 'axios';
import { BeatLoader } from 'react-spinners';
import CarCard from './CarCard';

export default function CarShowcase(){
    const [carData, setCarData] = useState([]);
    const [selectedManufacturer, setSelectedManufacturer] = useState('');
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:3000/cars')
            .then((response) => {
                setCarData(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Fehler beim Abrufen der API');
                setLoading(true);
            });
    }, []);

    useEffect(() => {
        if (carData.length > 0) {
            setSelectedManufacturer(carData[0].manufacture);
        }
    }, [carData]);

    const handleManufacturerChange = (event) => {
        setSelectedManufacturer(event.target.value);
    };

    if(isLoading){
        return(
            <BeatLoader />
        )
    }

    const manufacturers = [...new Set(carData.map((car) => car.manufacture))];
    const filteredCars = carData.filter(
        (car) => car.manufacture === selectedManufacturer
    );

    return (
        <>
        <h1>Car Showcase</h1>
        <div className='flex'>
          <div>
            <select
              id="manufacturer"
              value={selectedManufacturer}
              onChange={handleManufacturerChange}
            >
              {manufacturers.map((manufacturer) => (
                <option key={manufacturer} value={manufacturer}>
                  {manufacturer}
                </option>
              ))}
            </select>
          </div>
    
          <div className='flex'>
            {filteredCars.map((car) => (
                <CarCard
                    key={car.id}
                    manufacture={car.manufacture}
                    carname={car.carname}
                    hp={car.horsepower}
                    price={car.price}
                    transmission={car.transmission}
                    fueltype={car.fueltype}
                    imglink={car.imglink}
                />
            ))}
          </div>
        </div>
        </>
      );
}