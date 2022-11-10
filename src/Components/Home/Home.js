import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { InfoContext } from '../AuthContext/AuthContext';
import useTitle from '../Hooks/useTitle';
import ThreeService from '../ThreeService/ThreeService';
import { FaDove, FaGrinHearts, FaRunning, FaHeart } from "react-icons/fa";
import vidbg from '../Home/Waves - 70796.mp4'

const Home = () => {

    useTitle('Home')
    const { user } = useContext(InfoContext)

    const alldata = useLoaderData()
    const navigate = useNavigate()


    const btnSeeAll = () => {

        navigate('/seeall')




    }


    return (
        <div>

            <h1><span className='text-4xl text-orange-600 font-bold'> Memorable Journeys</span> <br /><span className='text-2xl font-semibold'> Your personal tour guide </span></h1>

{/* ........................................................carousel............................................................ */}

            <div className="carousel w-full mt-2 container mx-auto h-[500px] shadow-2xl shadow-slate-800">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://images.unsplash.com/photo-1590603740183-980e7f6920eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80" className="w-full" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://images.unsplash.com/photo-1624635446500-d4c4ec4eb0ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="w-full " alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://images.unsplash.com/photo-1577624060070-ca1afe89ddad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1026&q=80" className="w-full" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://images.unsplash.com/photo-1622760219088-90c1576336a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80" className="w-full" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>

            <div className="divider"></div>

{/* ................................................service cards with data limit 3................................................ */}

            <div className='mt-6 text-5xl font-medium underline '>
                <h1>My service<span className='text-orange-600'>s</span></h1>

            </div>


            <div className='container lg:grid grid-cols-3 mt-5'>

                {

                    alldata?.map(data => <ThreeService key={data._id} data={data}></ThreeService>)

                }


            </div>

            <button onClick={btnSeeAll} className="btn btn-warning mt-8 btn-wide">See All</button>

            <div className="divider"></div>

            <div>

{/* ...............................................package section start from here................................................... */}

                <section className="py-20 bg-white">
                    <div className="container px-4 mx-auto">
                        <div className="max-w-2xl mx-auto mb-16 text-center">
                            <span className="font-bold tracking-wider uppercase">Limited time offers</span>
                            <h2 className="text-4xl font-bold lg:text-5xl">Choose your best package</h2>
                        </div>
                        <div className="flex flex-wrap items-stretch -mx-4">
                            <div className="lg:flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
                                <div className="flex flex-col p-6 space-y-6 rounded shadow-2xl sm:p-8 bg-orange-200">
                                    <div className="space-y-2">
                                        <h4 className="text-2xl font-bold">Single Person</h4>
                                        <span className="text-6xl font-bold ">20000</span>
                                        <span className="text-sm tracking-wide font-semibold">/3days</span>
                                    </div>
                                    <p className="mt-3 leading-relaxed">Anywhere in bangladesh.</p>
                                    <ul className="flex-1 mb-6">
                                        <li className="flex mb-2 space-x-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 ">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                            </svg>
                                            <span>Food</span>
                                        </li>
                                        <li className="flex mb-2 space-x-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 ">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                            </svg>
                                            <span>Travel</span>
                                        </li>
                                        <li className="flex mb-2 space-x-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 ">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                            </svg>
                                            <span>Hotel Room</span>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                            <div className="lg:flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
                                <div className="flex flex-col p-6 space-y-6 rounded shadow-2xl  bg-orange-200 sm:p-8">
                                    <div className="space-y-2">
                                        <h4 className="text-2xl font-bold">Couple</h4>
                                        <span className="text-6xl font-bold">35000
                                            <span className="text-sm tracking-wide font-semibold">/5days</span>
                                        </span>
                                    </div>
                                    <p className="leading-relaxed">Anywhere in bangladesh.</p>
                                    <ul className="flex-1 space-y-2">
                                        <li className="flex items-center space-x-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                            </svg>
                                            <span>Food(British/Thai/Chinese)</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                            </svg>
                                            <span>Travel(personal car)</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                            </svg>
                                            <span>Hotel room with best view</span>
                                        </li>
                                        <li className="flex items-center space-x-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                            </svg>
                                            <span>return ticket</span>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                            <div className="w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
                                <div className="p-6 space-y-6 rounded shadow-2xl bg-orange-200 sm:p-8">
                                    <div className="space-y-2">
                                        <h4 className="text-2xl font-bold">Team</h4>
                                        <span className="text-6xl font-bold">40000
                                            <span className="text-sm tracking-wide">/4days</span>
                                        </span>
                                    </div>
                                    <p className="leading-relaxed ">Anywhere in bangladesh</p>
                                    <ul className="space-y-2">
                                        <li className="flex items-start space-x-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 ">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                            </svg>
                                            <span>Food(British/Thai/Chinese)</span>
                                        </li>
                                        <li className="flex items-start space-x-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 ">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                            </svg>
                                            <span>Travel</span>
                                        </li>
                                        <li className="flex items-start space-x-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 ">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                            </svg>
                                            <span>Hotel Rooms</span>
                                        </li>
                                        <li className="flex items-start space-x-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 ">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                            </svg>
                                            <span>Return tickets for three persons</span>
                                        </li>

                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </div>
            <div className="divider"></div>



            <div>

{/* .............................................about me section.................................................................. */}

                <div className="hero lg:min-h-screen container mx-auto shadow-2xl shadow-slate-800">
                    <div className="hero-content text-center">
                        <div className="lg:max-w-full">
                            <h1 className="lg:text-1xl font-bold">About <span className='text-green-800'>me</span></h1>
                            <h1 className="lg:text-2xl font-bold lg:block hidden">I'M A PERSONAL <span className='text-green-800'>TOUR GUIDE</span></h1>
                            <h1 className="lg:text-5xl font-bold">DISCOVER BANGLADESH <span className='text-green-800'>WITH ME</span></h1>
                            <p className="lg:py-6 lg:text-red-600 lg:font-semibold lg:text-lg text-black lg:uppercase"> I am Energetic professional with 6 years of experience informing and guiding museum visitors. <br /> Superior talent for entertaining audience members and delivering a high level of customer service. <span className='lg:block hidden'>Extensive knowledge of history and visual arts; able to learn, retain, and recall extensive amounts of information quickly</span></p>

                        </div>
                    </div>

                    <video src={vidbg} autoPlay loop muted></video>

                </div>



            </div>

{/* .......................................................stats section........................................................... */}

            <div className="divider"></div>
            <section className="p-6 my-6">
                <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">
                    <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 ">
                        <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4">
                            <FaDove className='text-5xl'></FaDove>
                        </div>
                        <div className="flex flex-col justify-center align-middle">
                            <p className="text-3xl font-semibold leading-none stat-value text-primary">100%</p>
                            <p className="capitalize">success rate</p>
                        </div>
                    </div>
                    <div className="flex p-4 space-x-4 rounded-lg md:space-x-6">
                        <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4">
                            <FaGrinHearts className='text-5xl'></FaGrinHearts>
                        </div>
                        <div className="flex flex-col justify-center align-middle">
                            <p className="text-3xl font-semibold leading-none stat-figure text-secondary">60%</p>
                            <p className="capitalize">Repeat clients</p>
                        </div>
                    </div>
                    <div className="flex p-4 space-x-4 rounded-lg md:space-x-6">
                        <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 ">
                            <FaRunning className='text-5xl'></FaRunning>
                        </div>
                        <div className="flex flex-col justify-center align-middle ">
                            <p className="text-3xl font-semibold leading-none stat-figure text-warning">4000+</p>
                            <p className="capitalize">tours</p>
                        </div>
                    </div>
                    <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 ">
                        <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 ">
                            <FaHeart className='text-5xl'></FaHeart>
                        </div>
                        <div className="flex flex-col justify-center align-middle">
                            <p className="text-3xl font-semibold leading-none stat-figure text-accent">2M</p>
                            <p className="capitalize">Followers</p>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default Home;