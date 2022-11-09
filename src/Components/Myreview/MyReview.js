import React, { useContext, useEffect, useState } from 'react';
import { InfoContext } from '../AuthContext/AuthContext';
import useTitle from '../Hooks/useTitle';
import Review from '../review/Review';
import ReviewsByEmail from '../ReviewsByEmail/ReviewsByEmail';


const MyReview = () => {

    useTitle('My review')
    const [reviewByEmail, setallreviewByEmail] = useState([])
    const { user, logOut } = useContext(InfoContext)


    useEffect(() => {

        fetch(`https://memorable-journey-tourist-service-server.vercel.app/reviewbyemail?email=${user?.email}`, {




            headers: {

                authorization: `Bearer ${localStorage.getItem('token')}`

            }






        })
            .then(res => {

                if (res.status === 401 || res.status === 403) {

                    logOut()


                }

                return res.json()

            })
            .then(data => {


                setallreviewByEmail(data)



            })




    }, [])

    return (
        <div>

            <div className='mx-auto lg:mt-[12.5%] lg:mb-[10%] text-5xl font-semibold'>
                {
                    reviewByEmail.length === 0 && <h1 className='lg:mt-0 mt-[55%]'>No reviews were added</h1>

                }
            </div>

            {

                reviewByEmail?.map(allReview => <ReviewsByEmail key={allReview._id} allReview={allReview} reviewByEmail={reviewByEmail} setallreviewByEmail={setallreviewByEmail}></ReviewsByEmail>)

            }



        </div>
    );
};

export default MyReview;