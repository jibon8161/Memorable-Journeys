import { createBrowserRouter } from "react-router-dom";
import AddService from "../Components/AddService/AddService";
import AllServices from "../Components/Allservices-SeeAll/AllServices";
import Blog from "../Components/Blog/Blog";
import Error from "../Components/Error/Error";
import Home from "../Components/Home/Home";
import Main from "../Components/Layout/Main";
import Login from "../Components/Login/Login";
import MyReview from "../Components/Myreview/MyReview";
import Review from "../Components/review/Review";
import Signup from "../Components/SignUp/Signup";
import Update from "../Components/Update/Update";
import ViewDetails from "../Components/ViewDetails/ViewDetails";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([

    {

        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [

            {

                path: '/',
                element: <Home></Home>,
                loader: async () => fetch('https://memorable-journey-tourist-service-server.vercel.app/limitservices')

            },
            {

                path: '/login',
                element: <Login></Login>

            },
            {

                path: '/signup',
                element: <Signup></Signup>

            },
            {

                path: '/myreview',
                element: <PrivateRoute><MyReview></MyReview></PrivateRoute>

            },
            {

                path: '/addservice',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>

            },
            {

                path: '/update/:id',
                element: <Update></Update>,
                loader: async ({ params }) => fetch(`https://memorable-journey-tourist-service-server.vercel.app/update/${params.id}`)

            },
            {

                path: '/seeall',
                element: <AllServices></AllServices>,
                loader: async () => fetch('https://memorable-journey-tourist-service-server.vercel.app/seemoreservices')


            },
            {

                path: '/details/:id',
                element: <ViewDetails></ViewDetails>,
                loader: async ({ params }) => fetch(`https://memorable-journey-tourist-service-server.vercel.app/services/${params.id}`)

            },
            {

                path: '/blog',
                element: <Blog></Blog>

            },





        ]

    }








])