"use client"
import React, { useContext } from 'react';
import { planeContext } from '../context/context';
import { IWorkout } from '../type/type';
import { toast } from 'react-toastify';

const SavedBtn = ({plan}:{plan:IWorkout}) => {

    const { saved, setSaved } = useContext(planeContext) as {
          saved: IWorkout[];
          setSaved: React.Dispatch<React.SetStateAction<IWorkout[]>>;
        }
  const handaleSaved =()=>{
      if(saved.includes(plan)){
        toast.info('this item alrady added saved section')
        return;
      }
      setSaved([...saved, plan])
      toast.success(`${plan.name} succssfully added`);
     }
    return (
        <div>
            <button 
            onClick={handaleSaved}
            className="rounded-lg border border-gray-700 px-5 py-3 text-sm text-gray-300 transition hover:bg-gray-800">
              ♧ Save for later
            </button>
        </div>
    );
};

export default SavedBtn;