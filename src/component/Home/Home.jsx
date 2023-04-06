import React from 'react';
import Header from '../Header/Header';
import { Outlet, useLoaderData } from 'react-router-dom';

const Home = () => {
    const tshats=useLoaderData()
    console.log(tshats)
    return (
        <div>
           <h1>Tsarts length : {tshats.length}</h1>
        </div>
    );
};

export default Home;