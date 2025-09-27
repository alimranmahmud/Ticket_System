import React from 'react';

const Footer = () => {
    return (
         <div className='text-white bg-black py-8 sm:text-center'>
        <div className='grid  grid-cols-2 lg:grid-cols-5 items-center gap-10 max-w-[1200px] mx-auto'>

          <div>
            <h1 className='font-bold text-xl'>CS — Ticket System</h1>
            <p className='text-[#A1A1AA]'>CS — Ticket System is a comprehensive platform designed
              to help teams efficiently manage, track, and resolve support
              tickets. With its user-friendly interface and real-time updates,
              and ensure faster issue resolution, ultimately enhancing
              customer satisfaction and improving overall productivity.</p>
          </div>

          <div>
            <h1 className='font-bold text-xl'>Company</h1>
            <p className='text-[#A1A1AA]'>About Us</p>
            <p className='text-[#A1A1AA]'>Our Mission</p>
            <p className='text-[#A1A1AA]'>Contact Saled</p>
          </div>

          <div>
            <h1 className='font-bold text-xl'>Services</h1>
            <p className='text-[#A1A1AA]'>Products & Services</p>
            <p className='text-[#A1A1AA]'>Customer Stories</p>
            <p className='text-[#A1A1AA]'>Download Apps</p>

          </div>

          <div>
            <h1 className='font-bold text-xl'>Information</h1>
            <p className='text-[#A1A1AA]'>Privacy Policy</p>
            <p className='text-[#A1A1AA]'>Terms & Conditions</p>
            <p className='text-[#A1A1AA]'>Join Us</p>
          </div>
        
          <div>
            <h1 className='font-bold text-xl'>Social Links</h1>
            <p className='text-[#A1A1AA]'>@CS — Ticket System</p>
            <p className='text-[#A1A1AA]'>@CS — Ticket System</p>
            <p className='text-[#A1A1AA]'>@CS — Ticket System</p>
            <p className='text-[#A1A1AA]'>support@cst.com</p>
          </div>
        </div>

        <br /><br />
        <hr />
        <p className='text-center mt-3'>© 2025 CS — Ticket System. All rights reserved.</p>
      </div>
    );
};

export default Footer;