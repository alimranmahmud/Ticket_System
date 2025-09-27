import React from 'react';

const ResolvedTask = ({rData}) => {
    return (
        <div className='bg-[#02a53b35] mt-2 p-2 space-y-2 rounded-md'>
            <h1 className='font-semibold'>{rData.title}</h1>
            <p className='text-[#02A53B] font-semibold'>✓ Complete</p>
        </div>
    );
};

export default ResolvedTask;