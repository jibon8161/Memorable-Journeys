import React from 'react';

const AllServiceData = ({alldata}) => {

    const { name, price, urlimg, details } = alldata

    return (
        <div>
            <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100 conotainer mx-auto">
                <img src={urlimg} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
                        <p className="dark:text-gray-100">{details.slice(0, 90)}...</p>
                    </div>
                    <button type="button" className=" btn btn-infoflex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default AllServiceData;