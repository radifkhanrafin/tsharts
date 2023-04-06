import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home/Home';
import Contact from './component/Contact/Contact';
import About from './component/About/About';
import Order from './component/Order/Order';
import Layout from './component/Layout/Layout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader: ()=> fetch('tsharts.json')
      },
      {
        path:"/order",
        element: <Order></Order>
      },
      {
        path:"/contact",
        element:<Contact></Contact>
      },
      {
        path:"/about",
        element: <About></About>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
