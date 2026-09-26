
"use client"
import React, { useContext, useState } from 'react';
import TodayPlane from '../components/TodayPlane';
import SavedPlane from '../components/SavedPlane';
import { planeContext } from '../context/context';
import { IWorkout } from '../type/type';
import { DiVim } from 'react-icons/di';

const MyPlanePage = () => {
 const [active, setActive] = useState('plan')
 const { planes, setPlanes, saved, setSaved } = useContext(planeContext) as {
     planes: IWorkout[],
     setPlanes: React.Dispatch<React.SetStateAction<IWorkout[]>>,
     saved:IWorkout[],
     setSaved: React.Dispatch<React.SetStateAction<IWorkout[]>>
   }

const duration = planes.reduce( (acc, value) => acc + value.duration, 0);
const calories = planes.reduce((acc, value) => acc + value.caloriesBurned, 0);

const duration2 = saved.reduce( (acc, value) => acc + value.duration, 0);
const calories2 = saved.reduce((acc, value) => acc + value.caloriesBurned, 0);
 
    return (
        <div className='container mx-auto my-6'>
            <div className='my-4'>
                <h1 className='text-4xl font-bold'>MY PLAN</h1>
                <p className='text-gray-500 '>Cap of five for today. Finish them, then load more</p>
            </div>

             <div>
               {
                 active === 'plan' ? 
                 <div>
                    {
                      planes.length > 0 ? <div className='flex justify-between items-baseline bg-black px-8 py-6 rounded-xl'>
                           <div>
                              <span className='text-gray-500'>Exercises</span>
                              <h1 className='text-[#CCFF00] font-bold text-4xl'>{planes.length}</h1>
                           </div>

                           <div>
                               <span className='text-gray-500 '>Minutes</span>
                               <h1 className='text-white font-bold text-4xl'>{duration}</h1>
                           </div>

                           <div>
                             <span className='text-gray-500 '>Calories</span>
                             <h1 className='font-bold text-4xl text-white'>{calories}</h1>
                           </div>
                        </div> :''
                    }
                </div> : 
                
                <div>
                    {
                      <div>
                    {
                      saved.length > 0 ? <div className='flex justify-between items-baseline bg-black px-8 py-6 rounded-xl'>
                           <div>
                              <span className='text-gray-500'>Exercises</span>
                              <h1 className='text-[#CCFF00] font-bold text-4xl'>{saved.length}</h1>
                           </div>

                           <div>
                               <span className='text-gray-500 '>Minutes</span>
                               <h1 className='text-white font-bold text-4xl'>{duration2}</h1>
                           </div>

                           <div>
                             <span className='text-gray-500 '>Calories</span>
                             <h1  className='font-bold text-4xl text-white'>{calories2}</h1>
                           </div>
                        </div> :''
                    }
                      </div> 
                     
                    }
                </div>
               }
             </div>
             <div className='my-6'>
                <div className='w-[200px] bg-black rounded-xl overflow-hidden flex justify-between items-center'>
                   <button 
                onClick={()=> setActive('plan')}
                className={`btn ${active === 'plan' && 'bg-[#CCFF00]'}`}>Today's Plan</button>
                <button 
                onClick={()=> setActive('saved')}
                className={`btn ${active === 'saved' && 'bg-[#CCFF00]'}`}>Saved</button>
                </div>
             </div>

           <div>
            {
              active === 'plan' ?
            <div>
                 <TodayPlane></TodayPlane>
            </div>
             :
             <div>
                  <SavedPlane></SavedPlane>
              </div>
            }
           </div>
        </div>
    );
};

export default MyPlanePage;