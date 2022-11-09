import React from 'react';

import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { useNavigate } from 'react-router-dom';

const ThreeService = ({ data }) => {

    const { name, price, urlimg, details, _id } = data
    const navigate = useNavigate()

    const viewDetailsBtn = () => {

        navigate(`/details/${_id}`)



    }


    return (

        // .........................................service cards.....................................................

        <div>
            <div className="max-w-xs rounded-md shadow-2xl shadow-slate-900 dark:bg-gray-900 dark:text-gray-100 conotainer mx-auto">

                <PhotoProvider>
                    <PhotoView src={urlimg}>
                        <img src={urlimg} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500 " />
                    </PhotoView>
                </PhotoProvider>

                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
                        <h1 className='text-orange-700'>Price: {price}</h1>
                        <p className="dark:text-gray-100">{details.slice(0, 90)}...</p>
                    </div>
                    <button onClick={viewDetailsBtn} type="button" className=" btn btn-infoflex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900">View Details</button>
                </div>
            </div>

        </div>
    );
};

export default ThreeService;