import React from 'react'
import {createBrowserRouter} from "react-router-dom"
import App from '../App'
import Error from '../components/elements/Error'
import Register from '../Pages/Register'
import Login from '../Pages/Login'
import Ecommerce from '../pages/Ecommerce'
import Product from '../Pages/Product'

const Routes = createBrowserRouter ([
    {
        path: "/", element: <App />, errorElement: <Error />, children: [
            { path: "registro", element: <Register />},
            { path: "login", element: <Login />},
            { path: "/e-commerce", element: <Ecommerce />},
            { path: "/e-commerce/:productId", element: <Product />}
        ]
    },
])

export default Routes
