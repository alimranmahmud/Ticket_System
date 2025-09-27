import React from 'react';
import { toast } from 'react-toastify';

const TaskStatus = ({ pData, resolvedData, setResolvedData,handelComplete,progress,setProgress }) => {
    const handleResolved = () => {
        setResolvedData([...resolvedData, pData])
        handelComplete(pData)
        setProgress(progress-1)
        toast("Completed!")
       
    }
    return (
        <div className='lg:p-3 py-3 shadow-md rounded-md space-y-2'>
            <h1 className='font-semibold'>{pData.title}</h1>
            <button onClick={handleResolved} className='bg-[#02A53B] w-full py-2 rounded-md font-semibold text-white'>Complete</button>
        </div>
    );
};

export default TaskStatus;