import React, { useEffect, useState } from 'react';
import Service from '../ServiceCard/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])

    return (
        <div style={{overflowX: 'hidden'}} className='md:w-5/6 mx-auto mb-28'>
            <div className='text-center mb-14'>
                <p className='text-xl font-bold text-orange-500'>Service</p>
                <h2 className='text-5xl font-bold my-5'>Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center md:gap-x-6 gap-y-14 mx-3'>
                {
                   services.map(service => <Service key={service._id} service={service}></Service>) 
                }
            </div>
        </div>
    );
};

export default Services;