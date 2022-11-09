import React, { useState } from 'react';
import toast from 'react-hot-toast';
import useTitle from '../Hooks/useTitle';

const AddService = () => {

    useTitle('Add service')


    const handleAddService = event => {

        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const urlimg = form.url.value

        const details = form.details.value
        const price = form.price.value
        const data = { name, details, price, urlimg }



        fetch('https://memorable-journey-tourist-service-server.vercel.app/seemoreservices', {


            method: 'POST',
            headers: {

                'content-type': 'application/json'

            },
            body: JSON.stringify(data)

        })
            .then(res => res.json())
            .then(data => {


                console.log(data)
                toast.success('service is added successfully')
                form.reset()






            })




    }


    return (
        <div>
            <h1 className='text-5xl font-bold mt-4 underline'>Add a service</h1>

            <div>
                <div>
                    <div className="hero min-h-screen bg-base-200 shadow-2xl min-w-full">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <div className="text-center lg:text-left">


                            </div>
                            <div className="card flex-shrink-0 w-full lg:w-[900px] max-w-sm shadow-2xl bg-base-100 ">
                                <form onSubmit={handleAddService} className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Service Name</span>
                                        </label>
                                        <input type="text" placeholder="Name" name='name' className="input input-bordered shadow-inner  shadow-purple-600 hover:bg-purple-200" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">photo URL</span>
                                        </label>
                                        <input type="text" placeholder="photo URL" name='url' className="input input-bordered shadow-inner  shadow-purple-600 hover:bg-purple-200" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Service Price</span>
                                        </label>
                                        <input type="text" placeholder="Price" name='price' className="input input-bordered shadow-inner  shadow-purple-600 hover:bg-purple-200" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Details</span>
                                        </label>
                                        <input type="text" placeholder="Details" name='details' className="input input-bordered shadow-inner  shadow-purple-600 hover:bg-purple-200" required />
                                        <label className="label">

                                        </label>
                                    </div>

                                    <div className="form-control mt-6">
                                        <button className="btn btn-primary">Add Service</button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>



                </div>
            </div>

        </div>
    );
};

export default AddService;