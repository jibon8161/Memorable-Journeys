import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllServiceData from '../AllServiceDataDisplay/AllServiceData';
import { InfoContext } from '../AuthContext/AuthContext';
import useTitle from '../Hooks/useTitle';

const AllServices = () => {

    const [data, setData] = useState([])
    const [loader, setLoader] = useState(true)
    useTitle('All Services')
   
    console.log(data)

    useEffect(() => {

        fetch('https://memorable-journey-tourist-service-server.vercel.app/seemoreservices')
            .then(res => res.json())
            .then(serviceData => {

                setData(serviceData)
                setLoader(false)

            })





    }, [])


    return (
        <div>
            <div className='mt-6 text-5xl  font-medium '>
                <h1> All Service<span className='text-orange-600'>s</span></h1>
            </div>
            {
                loader ? <div className="w-32 h-32 border-4 border-dashed rounded-full animate-spin mx-auto mt-32 mb-32 border-red-600"></div> :


                    <div className='lg:grid grid-cols-3 mt-5'>

                        {

                            data?.map(alldata => <AllServiceData key={alldata._id} alldata={alldata}></AllServiceData>)

                        }

                    </div>


            }
        </div>
    );
};

export default AllServices;