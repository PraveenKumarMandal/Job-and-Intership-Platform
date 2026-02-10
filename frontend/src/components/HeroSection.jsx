import React, { useState } from 'react';
import { Button } from './ui/button';
import { Search } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';
import homeImage from '../assets/Home.jpeg';

const HeroSection = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = () => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    };

    return (
        <div className='flex items-center justify-center h-screen px-10 mt-[-50px]'>
            {/* Left Section */}
            <div className='w-1/2 text-center flex flex-col gap-5'>
                <span className='mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium'>Take a turn towards SUCCESS</span>
                <h1 className='text-5xl font-bold'>Search, Apply & <br /> Find Your <span className='text-[#f84c02]'>Dream Jobs</span> with Us</h1>
                <p>A great life starts with the right company. Explore endless opportunities here!</p>
                <div className='flex items-center w-[80%] mx-auto'>
                    <input
                        type="text"
                        placeholder='Find your dream jobs'
                        onChange={(e) => setQuery(e.target.value)}
                        className='outline-none border border-gray-300 rounded-md bg-white w-full py-3 px-4'
                    />
                    <Button onClick={searchJobHandler} className="ml-3 bg-[#ffbb32] px-4 py-6 rounded-md">
                        <Search className='h-8 w-8 text-white' />
                    </Button>
                </div>
            </div>
            {/* Right Section */}
            <div className='w-1/2 flex justify-center'>
            <img src={homeImage} alt='Job Search' className='max-w-full h-auto' />
            </div>
        </div>
    );
};

export default HeroSection;
