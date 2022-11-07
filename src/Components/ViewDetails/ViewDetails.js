import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewDetails = () => {
    const data = useLoaderData({})

    const { urlimg, name, price, details } = data;

    return (
        <div className='lg:grid grid-cols-2 mt-5 mb-5'>


            <div >
                <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
                    <div class="w-full bg-gray-300 bg-center bg-cover rounded-lg shadow-md" >

                        <img className='w-full' src={urlimg} alt="" />

                    </div>

                    <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                        <h3 className="py-2 font-bold tracking-wide text-center text-orange-600 uppercase dark:text-white">{name}</h3>

                        <div class="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                            <span className="font-bold text-gray-800 dark:text-gray-200 mx-auto">{price}$</span>

                        </div>

                    </div>
                </div >
                <p className='mt-4 mb-5 font-semibold'>{details}</p>
            </div>
            <div> review</div>

        </div>
    );
};

export default ViewDetails;