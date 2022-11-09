import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { InfoContext } from '../AuthContext/AuthContext';
import DisplayReview from '../DisplayReview/DisplayReview';

const Review = ({ servicedata }) => {

    const { user } = useContext(InfoContext)
    const [review, setReview] = useState([])
    const [refresh, setreFresh] = useState(true)
    console.log(servicedata._id)


    console.log(user)

    const post = event => {

        event.preventDefault()
        const form = event.target
        const review = form.review.value
        const email = user?.email
        const name = user?.displayName;
        const serviceId = servicedata._id;
        const image = user.photoURL
        const last_updated = new Date();
        const date = last_updated
        const servicename = servicedata.name



        const data = { review, email, name, serviceId, image, date, servicename }
        // console.log(data)




        fetch('https://memorable-journey-tourist-service-server.vercel.app/review', {


            method: 'POST',
            headers: {

                'content-type': 'application/json'

            },
            body: JSON.stringify(data)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success('review is added successfully')
                form.reset()

                setreFresh(!refresh)

            })






    }


    useEffect(() => {


        fetch(`https://memorable-journey-tourist-service-server.vercel.app/review?serviceId=${servicedata._id}`)
            .then(res => res.json())
            .then(data => {
                setReview(data)

            }


            )




    }, [refresh])

    // console.log(review)


    return (
        <div>

            <div>

                <h1 className='text-4xl font-semibold text-orange-600'> All reviews from happy Travelers </h1>

                <div>
                    {

                        review?.map(allReview => <DisplayReview key={allReview._id} allReview={allReview}></DisplayReview>)

                    }
                </div>


            </div>


            <div>

                {

                    user ? <form onSubmit={post} className="card-body">
                        <textarea className="textarea textarea-warning shadow-2xl shadow-slate-700 text-center text-lg" placeholder="Add review" name='review' required></textarea>
                        <button className='btn btn-outline w-32 lg:ml-[600px]' type="submit">Post</button>
                    </form>
                        :
                        <p className='text-3xl font-bold'><small>Please login to add a review.<Link to='/login'><button className="btn btn-link btn-xs"><small>Sign in</small></button></Link> </small></p>

                }


            </div>
        </div>
    );
};

export default Review;