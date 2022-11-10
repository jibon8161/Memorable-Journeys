import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { InfoContext } from '../AuthContext/AuthContext';
import useTitle from '../Hooks/useTitle';


const Signup = () => {
    const [loader, setLoader] = useState(false)

    useTitle('register')
    const { createUser, updateProfileInfo } = useContext(InfoContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/'

    const [error, setError] = useState('')

    const handleSignup = event => {

        event.preventDefault()

        const form = event.target
        const name = form.name.value
        const url = form.url.value

        const email = form.email.value
        const password = form.pass.value
        console.log(name, email, password, url)
        createUser(email, password)

            .then(result => {

                const user = result.user;
                console.log(user)
                setLoader(true)

                const currentUser = {

                    email: user.email


                }


                fetch('https://memorable-journey-tourist-service-server.vercel.app/jwt', {


                    method: "POST",
                    headers: {

                        'content-type': 'application/json'

                    },
                    body: JSON.stringify(currentUser)



                })


                    .then(res => res.json())
                    .then(data => {

                        console.log(data)
                        localStorage.setItem('token', data.token)
                        toast.success('User created  successfully')
                        form.reset()
                        setError('')


                        updateProfileInfo(name, url)
                            .then(() => { })
                            .catch(error => {
                                console.log(error)


                            })
                        navigate(from, { state: true })

                    })




            })
            .catch(err => {

                console.log(err)
                setError(err.message)


            })

    }

    return (
        <div>
            {

                loader ? <div className="w-32 h-32 border-4 border-dashed rounded-full animate-spin mx-auto mt-32 mb-32 border-red-600"></div> :


                    <div>
                        <div className="hero min-h-screen bg-base-200 shadow-2xl  shadow-zinc-600">
                            <div className="hero-content flex-col lg:flex-row-reverse">
                                <div className="text-center lg:text-left">


                                </div>
                                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                                    <form onSubmit={handleSignup} className="card-body">
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Name</span>
                                            </label>
                                            <input type="text" placeholder="Full Name" name='name' className="input input-bordered shadow-inner  shadow-zinc-600 hover:bg-orange-200" required />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">photo URL</span>
                                            </label>
                                            <input type="text" placeholder="photo URL" name='url' className="input input-bordered shadow-inner  shadow-zinc-600 hover:bg-orange-200" required />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Email</span>
                                            </label>
                                            <input type="email" placeholder="email" name='email' className="input input-bordered shadow-inner  shadow-zinc-600 hover:bg-orange-200" required />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Password</span>
                                            </label>
                                            <input type="password" placeholder="password" name='pass' className="input input-bordered shadow-inner  shadow-zinc-600 hover:bg-orange-200" required />
                                            <label className="label">

                                            </label>
                                        </div>
                                        <div className='text-red-600'><p><small>{error}</small></p></div>
                                        <div className="form-control mt-6">
                                            <button className="btn btn-primary">Register</button>
                                        </div>
                                    </form>
                                    <p><small>Already have an account please<Link to='/login'><button className="btn btn-link btn-xs"><small>Sign in</small></button></Link> </small></p>
                                </div>
                            </div>
                        </div>



                    </div>


            }
        </div>
    );
};

export default Signup;