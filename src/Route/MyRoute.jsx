
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Home from '../Pages/Home/Home';
import Detail from '../Pages/Detail/Detail';
import Login from '../Pages/AuthPages/Login';
import Register from '../Pages/AuthPages/Register';

const MyRoute = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => { return fetch('/news.json') }

            }, {
                path: '/details/:id',
                element: <Detail></Detail>,
                loader: () => { return fetch('/news.json') }
            },
            {
                path: '/login',
                element: <Login></Login>
            }, {
                path: '/register',
                element: <Register></Register>
            }

        ]


    }])

export default MyRoute;