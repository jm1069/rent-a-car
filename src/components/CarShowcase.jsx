import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { SimpleGrid, Container, Select  } from '@mantine/core';
import { BeatLoader } from 'react-spinners';
import CarCard from './CarCard';

export default function CarShowcase(){
    const [carData, setCarData] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [isError , setError] = useState(false);
    const [manufacutres, setManufactures] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/cars')
            .then((response) => {
                setCarData(response.data);
                setLoading(false);
                setError(false);
                getManuFactures(response.data)
            })
            .catch((error) => {
                console.error('Fehler beim Abrufen der API');
                setLoading(false);
                setError(true);
            });
    }, []);

    const getManuFactures = (array) => {
        const carArray = array.map((car) => car.manufacture);
        console.log(carArray);
        const uniqueManufactures = [...new Set(carArray)];
        setManufactures(uniqueManufactures);
    }

    if(isLoading){
        return(
            <div className='flex items-center justify-center h-screen'>
                <BeatLoader />  
            </div>
        )
    }

    if(isError){
        return(
            <div>Fehler beim Laden</div>
        )
    }

    return (
        <>
            <Select width="sm" data={manufacutres}/>
            <Container size="110rem" px="md">
                    <SimpleGrid cols={5}>
                        {carData.map((car) => (
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
                    </SimpleGrid>
            </Container>
        </>
      );
}