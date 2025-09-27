// import React, { use } from 'react';
import TCard from './TCard';
import TaskStatus from '../TaskStatus/TaskStatus';
import ResolvedTask from '../ResolvedTask/ResolvedTask';


const TicketCards = ({ promiseTicket, progress, setProgress, progressData, setProgressData, resolvedData, setResolvedData, handelComplete }) => {
    // const TicketData = use(promiseTicket)

    


    return (
        <div className='grid  grid-cols-12 gap-3 max-w-[1200px] mx-auto'>
            <div className='mt-10 col-span-8  lg:col-span-9'>
                <h1 className=' text-xl font-bold'>Customer Tickets</h1>
                <div className='grid md:grid-cols-1 lg:grid-cols-2'>
                    {
                        promiseTicket.map(ticket => <TCard key={ticket.id} ticket={ticket} progress={progress} setProgress={setProgress} progressData={progressData} setProgressData={setProgressData}></TCard>)
                    }
                </div>

            </div>

            <div className='text-[#34485A] col-span-3 mt-10'>
                <div>
                    <h1 className='font-bold text-xl'>Task Status</h1>
                    <p className='text-[13px]'>Select a ticket to add to Task Status</p>


                    {
                        progressData.map((pData, index) => <TaskStatus key={index} resolvedData={resolvedData}
                            setResolvedData={setResolvedData}
                            pData={pData}
                            handelComplete={handelComplete}
                            progress={progress}
                            setProgress={setProgress}
                            
                        ></TaskStatus>)


                    }

                </div>

                <div className='mt-5'>
                    <h1 className='font-bold text-xl'>Resolved Task</h1>
                    <p className='text-[13px]'>No resolved tasks yet.</p>


                    {
                        resolvedData.map(rData => <ResolvedTask key={rData.id} rData={rData}></ResolvedTask>)
                    }



                </div>
            </div>
        </div>

    );
};

export default TicketCards;