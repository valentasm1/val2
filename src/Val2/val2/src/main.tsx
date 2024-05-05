import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './pages/layout';
import Home from './pages/home';
import Error from './pages/error';
import Skills from './pages/skills';


const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
                errorElement: <Error />,
            },
            {
                path: "/skills",
                element: <Skills />,
                errorElement: <Error />,
            }           
        ],
    },
    {
        path: "/error",
        element: <Error />,
        errorElement: <Error />,
    },
    {
        path: "*",
        element: <Error />,
        errorElement: <Error />,
    },
]);


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);