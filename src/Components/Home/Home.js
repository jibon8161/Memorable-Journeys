import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { InfoContext } from '../AuthContext/AuthContext';
import ThreeService from '../ThreeService/ThreeService';

const Home = () => {

    const { user } = useContext(InfoContext)

    const alldata = useLoaderData()

    return (
        <div>

            <h1><span className='text-4xl text-orange-600 font-bold'> Memorable Journeys</span> <br /><span className='text-2xl font-semibold'> a trusted tourist service </span></h1>
            <div className="carousel w-full mt-2 container mx-auto">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://placeimg.com/800/200/arch" className="w-full" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://placeimg.com/800/200/arch" className="w-full " alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://placeimg.com/800/200/arch" className="w-full" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://placeimg.com/800/200/arch" className="w-full" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>

            <div className='container lg:grid grid-cols-3 mt-5 '>

                {

                    alldata?.map(data => <ThreeService key={data._id} data={data}></ThreeService>)

                }


            </div>

            <button className="btn btn-warning mt-8 btn-wide">See All</button>


        </div>
    );
};

export default Home;