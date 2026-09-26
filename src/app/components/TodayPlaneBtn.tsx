"use client"
import React, { useContext } from 'react';
import { IWorkout } from '../type/type';
import { planeContext } from '../context/context';
import { toast } from 'react-toastify';

const TodayPlaneBtn = ({plan}:{plan:IWorkout}) => {

    const { planes, setPlanes } = useContext(planeContext) as {
      planes: IWorkout[];
      setPlanes: React.Dispatch<React.SetStateAction<IWorkout[]>>;
    }

    const handalePlane=()=>{
        if(planes.includes(plan)){
          toast.info('this item already added today plane')
          return;
        }
        setPlanes([...planes, plan])
      toast.success(`${plan.name} is added!`)
    }

    console.log(planes)

    return (
        <div>
             <button
                type="button"
                onClick={handalePlane}
                className="rounded-lg bg-[#b6ff00] px-5 py-3 text-sm font-semibold text-black transition hover:bg-[#c8ff4d]"
            >
              Add to today&apos;s plan
            </button>
        </div>
    );
};

export default TodayPlaneBtn;