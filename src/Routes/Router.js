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
                loader: async () => fetch('http://localhost:5000/limitservices')

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
                element: <AddService></AddService>

            },
            {

                path: '/update/:id',
                element: <Update></Update>,
                loader: async ({params})=> fetch(`http://localhost:5000/update/${params.id}`)

            },
            {

                path: '/seeall',
                element: <AllServices></AllServices>,
                loader: async () => fetch('http://localhost:5000/seemoreservices')


            },
            {

                path: '/details/:id',
                element: <ViewDetails></ViewDetails>,
                loader: async ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)

            },
            {

                path: '/blog',
                element: <Blog></Blog>

            },





        ]

    }








])