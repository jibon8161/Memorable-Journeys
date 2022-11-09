import React from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const ReviewsByEmail = ({ allReview, reviewByEmail, setallreviewByEmail }) => {



    const handledel = id => {


        console.log(id)


        const proceed = window.confirm('are u sure that you want to delete your review?')

        if (proceed) {


            fetch(`https://memorable-journey-tourist-service-server.vercel.app/reviews/${id}`, {

                method: 'DELETE',

            })
                .then(res => res.json())
                .then(data => {

                    console.log(data)
                    if (data.deletedCount > 0) {

                        toast.error('deleted successfully')
                        const remaining = reviewByEmail.filter(del => del._id !== id);
                        setallreviewByEmail(remaining)

                    }


                })



        }



    }



    return (
        <div>

            <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100 shadow-inner shadow-slate-800 mb-8">
                <h1 className="font-bold">Service name:{allReview.servicename}</h1>
                <div className="flex justify-between p-4">
                    <div className="flex space-x-4">
                        <div>
                            <img src={allReview.image} alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                        </div>
                        <div>
                            <h4 className="font-bold">{allReview?.name}</h4>
                            {/* <span className="text-xs dark:text-gray-400">{allReview?.date}</span> */}
                        </div>
                    </div>
                    <div className="flex items-center space-x-2 dark:text-yellow-500">
                        <Link to={`/update/${allReview._id}`}> <button className='btn btn-xs'>edit review</button></Link>
                        <button onClick={() => handledel(allReview._id)} className='btn btn-xs btn-warning'>delete</button>
                    </div>
                </div>
                <div className="p-4 space-y-2 text-lg font-bold dark:text-gray-400 ">
                    <p>{allReview.review}</p>

                </div>
            </div>






        </div>
    );
};

export default ReviewsByEmail;