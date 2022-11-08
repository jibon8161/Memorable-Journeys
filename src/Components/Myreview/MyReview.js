import React, { useContext, useEffect, useState } from 'react';
import { InfoContext } from '../AuthContext/AuthContext';
import ReviewsByEmail from '../ReviewsByEmail/ReviewsByEmail';


const MyReview = () => {
    const [reviewByEmail, setallreviewByEmail] = useState([])
    const { user } = useContext(InfoContext)
   

    useEffect(() => {

        fetch(`http://localhost:5000/reviewbyemail?email=${user?.email}`, {

        })
            .then(res => res.json())
            .then(data => {


                setallreviewByEmail(data)



            })




    }, [])

    return (
        <div>

            <h1>Your Reviews</h1>

            {

                reviewByEmail?.map(allReview => <ReviewsByEmail key={allReview._id} allReview={allReview} reviewByEmail={reviewByEmail}></ReviewsByEmail>)

            }



        </div>
    );
};

export default MyReview;