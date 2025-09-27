import React from 'react';
import img1 from '../../assets/vector2.png'

const IncreaseNumber = ({progressData,resolvedData}) => {
    return (
        <div className=' grid grid-cols-2 gap-6 max-w-[1200px] mx-auto mt-12'>
         <div style={{ backgroundImage: `url(${img1})`, backgroundSize: "cover", backgroundPosition: "center" }}>
               <div className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2]  flex justify-center items-center flex-col py-10 rounded-md text-white"
            
        
            
            >
                <p className='text-xl'>In-Progress</p>
                <h2 className='font-bold text-3xl'>{progressData.length}</h2>
            </div>
         </div>

            <div className=' bg-gradient-to-r from-[#54CF68] to-[#00827A] flex justify-center items-center flex-col py-10 rounded-md text-white'>
                <p className='text-xl'>Resolved</p>
                <h2 className='font-bold text-3xl'>{resolvedData.length}</h2>
            </div>

        </div>
    );
};

export default IncreaseNumber;