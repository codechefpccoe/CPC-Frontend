// 404 page

import React from 'react';
import { Link } from 'react-router-dom';
import  PageNotFound_Image  from '../../Images/PageNotFound.svg';

const PageNotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center space-y-5 h-screen p-4">
            <img src={PageNotFound_Image} alt="404" className="h-[24rem] w-[30rem]" />
            <h1 className="text-3xl font-bold font-cairo text-center text-black dark:text-white">
                Whoops! Lost in Space?
            </h1>
            <h2 className="text-lg font-medium font-cairo text-center text-gray-500 dark:text-white">
                The page you are looking for isn't found :( <br />
                We suggest you back to home
            </h2>
            <Link to="/" className="justify-center bg-indigo-700 p-[1rem_2rem] text-white rounded-lg hover:bg-white hover:border-indigo-700 hover:border-2 hover:text-indigo-700 transition-all duration-700 ease-in-out">
                Back to Home
            </Link>
        </div>
    );
};

export default PageNotFound;