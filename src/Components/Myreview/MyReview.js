import React, { useContext, useEffect, useState } from 'react';
import { InfoContext } from '../AuthContext/AuthContext';
import useTitle from '../Hooks/useTitle';
import Review from '../review/Review';
import ReviewsByEmail from '../ReviewsByEmail/ReviewsByEmail';


const MyReview = () => {

    useTitle('My review')
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

          <div className='mx-auto lg:mt-[12.5%] lg:mb-[10%] text-5xl font-semibold'>
          {
                reviewByEmail.length === 0 && <h1>No reviews were added</h1>

            }
          </div>

            {

                reviewByEmail?.map(allReview => <ReviewsByEmail key={allReview._id} allReview={allReview} reviewByEmail={reviewByEmail} setallreviewByEmail={setallreviewByEmail}></ReviewsByEmail>)

            }



        </div>
    );
};

export default MyReview;