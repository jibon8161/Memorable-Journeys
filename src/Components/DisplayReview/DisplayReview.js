import React from 'react';
import { FaCheckCircle } from "react-icons/fa";

const DisplayReview = ({ allReview }) => {
    console.log(allReview)


    return (
        <div>
            <div className="container mb-8 mt-5 flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100 shadow-inner shadow-slate-800 ">
                            <h1 className="font-bold">Service name:{allReview.servicename}</h1>
                <div className="flex justify-between p-4 ">
                    <div className="flex space-x-4 ">
                        <div>
                            <img src={allReview.image} alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                        </div>
                        <div>
                            <h4 className="font-bold">{allReview?.name}</h4>
                            {/* <span className="text-xs dark:text-gray-400">{allReview?.date}</span> */}
                        </div>
                    </div>
                    <div className="flex items-center space-x-2 dark:text-yellow-500">
                     <FaCheckCircle></FaCheckCircle>
                        {/* <span className="text-xl font-bold">4.5</span> */}
                    </div>
                </div>
                <div className="p-4 space-y-2 text-lg font-semibold dark:text-gray-400">
                    <p>{allReview.review}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default DisplayReview;