import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { InfoContext } from '../AuthContext/AuthContext';

const Review = ({ id }) => {

    const { user } = useContext(InfoContext)

    console.log(user)

    const post = event => {

        event.preventDefault()
        const form = event.target
        const review = form.review.value
        const email = user?.email
        const name = user?.displayName;
        const serviceId = id;
        const image = user.photoURL


        console.log({ review, email, name, serviceId, image })



        



    }


    return (
        <div>
            <div>
                <h1>{user?.email}</h1>


                {

                    user ? <form onSubmit={post} className="card-body">
                        <textarea className="textarea textarea-warning" placeholder="Add review" name='review'></textarea>
                        <button className='btn btn-outline w-32 lg:ml-[450px]' type="submit">Post</button>
                    </form>
                        :
                        <p className='text-3xl font-bold'><small>Please login to add a review.<Link to='/login'><button className="btn btn-link btn-xs"><small>Sign in</small></button></Link> </small></p>

                }


            </div>
        </div>
    );
};

export default Review;