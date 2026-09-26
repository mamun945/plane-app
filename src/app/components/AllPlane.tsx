import React from 'react';
import { getPlans, IWorkout } from '../type/type';
import PlaneCard from './PlaneCard';

const AllPlants = async() => {
    const allPlans:IWorkout[] = await getPlans();
    console.log(allPlans);
    return (
        <div>
            <div className='my-8'>
                <h1 className='text-3xl font-bold'>THE LIBRARY</h1>
                <p className='text-gray-500'>Twelve lifts covering every major muscle group.</p>
            </div>

            <div className='grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3'>
               {
                allPlans.map((plans:IWorkout, index:number) => <PlaneCard key={index} plans={plans}></PlaneCard>)
               }
            </div>
        </div>
    );
};

export default AllPlants;