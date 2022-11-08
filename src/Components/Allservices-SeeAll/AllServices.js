import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllServiceData from '../AllServiceDataDisplay/AllServiceData';
import useTitle from '../Hooks/useTitle';

const AllServices = () => {

    useTitle('All Services')
    const data = useLoaderData([])
    console.log(data)

    return (
        <div>
            <div className='mt-6 text-5xl  font-medium '>
                <h1> All Services<span className='text-orange-600'>s</span></h1>
            </div>
            <div className='lg:grid grid-cols-3 mt-5'>

                {

                    data.map(alldata => <AllServiceData key={alldata._id} alldata={alldata}></AllServiceData>)

                }

            </div>
        </div>
    );
};

export default AllServices;