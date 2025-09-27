import React from 'react';
import { toast } from 'react-toastify';

const TCard = ({ticket,progress,setProgress,progressData,setProgressData}) => {
    const {id,title,description,customer,priority,status,createdAt}=ticket
    const handleProgress=()=>{
    setProgress(progress+1)
    setProgressData([...progressData,ticket])
    toast("Progress!!")
    
}
    return (
        

        <div onClick={handleProgress}  className='p-4 shadow-md  text-[#627382] space-y-3 mt-3 rounded-md'>
         <div className='flex justify-between items-center text-[#627382] rounded-md '>
           <h3 className='font-semibold text-xl'>{title}</h3>
           <div className={`${status==='Open'?"bg-[#B9F8CF]":status==='In Progress'?"bg-[#F8F3B9]":""} flex  gap-1 items-center px-3 py-1 rounded-2xl`}>
            <p className={`${status==='Open'?"bg-[#02A53B]":status==='In Progress'?"bg-[#FEBB0C]":""} rounded-full p-2`}></p>
            <p className='text-[#0B5E06] text-[10px]'>{status}</p>
           </div>
         </div>
         <p>{description}</p>
        <div className='flex justify-between items-center text-[12px]'>
           <div className='flex gap-4 items-center'>
            <p># <span>{id}</span></p>
           <p className={`${status==='Open'?"text-[#F83044]":"text-[#FEBB0C]"}`}>{priority} PRIORITY</p>
           </div>

           <div className='flex items-center gap-4'>
            <p>{customer}</p>
            <p> {createdAt}</p>
           </div>

        </div>
        </div>
      
    );
};

export default TCard;