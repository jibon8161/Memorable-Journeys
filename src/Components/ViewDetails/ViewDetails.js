import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../Hooks/useTitle';
import Review from '../review/Review';

const ViewDetails = () => {

    useTitle('view Details')
    const data = useLoaderData({})

    const { urlimg, name, price, details, _id } = data;

    return (
        <div className='mt-5 mb-5'>


            <div >
                <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
                    <div className="w-full bg-gray-300 bg-center bg-cover rounded-lg shadow-md" >

                        <img className='w-full shadow-2xl shadow-slate-800' src={urlimg} alt="" />

                    </div>

                    <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                        <h3 className="py-2 font-bold tracking-wide text-center text-orange-600 uppercase dark:text-white">{name}</h3>

                        <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                            <span className="font-bold text-gray-800 dark:text-gray-200 mx-auto">{price}$</span>

                        </div>

                    </div>
                </div >
                <p className='mt-4 mb-5 font-semibold'>{details}</p>
            </div>
            <div>




                <Review servicedata={data}></Review>




            </div>

        </div>
    );
};

export default ViewDetails;