import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='px-4'>
            <h1 className='text-red-500'> Home Page</h1>
            <Link to="/layout">Layout</Link>
            
        </div>
    );
};

export default Home;