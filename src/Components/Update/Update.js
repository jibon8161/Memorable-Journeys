import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../Hooks/useTitle';

const Update = () => {



    const updateData = useLoaderData()
    console.log(updateData)

    useTitle('Update')

    const updatebtn = event => {

        event.preventDefault()
        const form = event.target
        const review = form.review.value;
        const updateReview = { review }


        fetch(`https://memorable-journey-tourist-service-server.vercel.app/update/${updateData._id}`, {

            method: 'PUT',
            headers: {
                'content-type': 'application/json'

            },
            body: JSON.stringify(updateReview)



        })
            .then(res => res.json())
            .then(data => {


                console.log(data)
                toast.success('successfully updated ')



            })





    }


    return (
        <div className=''>
            <h1 className='text-3xl font-bold '>update your review <span className='text-orange-600'>{updateData.name}</span></h1>

            <div className=''>
                <form  onSubmit={updatebtn} className="card-body mt-[118px]">
                    <textarea className="textarea textarea-warning shadow-2xl shadow-slate-700 text-center" placeholder="Add review" name='review' defaultValue={updateData.review} required></textarea>
                    <button className='btn btn-outline w-32 lg:ml-[600px]' type="submit">Update</button>
                </form>
            </div>

        </div>
    );
};

export default Update;