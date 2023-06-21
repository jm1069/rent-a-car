import React from 'react'

export default function CarCard(props){
  return (
    <div className='p-10'>
        <h1 className='text-xl'>{props.manufacture}</h1>
        <h2>{props.carname}</h2>
        <img className='object-cover w-96' src={props.imglink}></img>
        <button className='px-10 py-3 rounded-md bg-buttonblue font-md text-white'>Rent Now</button>
    </div>
  )
}