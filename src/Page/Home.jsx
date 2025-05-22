import React from 'react';
import Slider from '../components/Slider';
import { useLoaderData } from 'react-router';
import AdCard from '../components/AdCard';

const Home = () => {
    const allAds = useLoaderData();
    console.log(allAds);
    return (
        <div className='space-y-6 my-6'>
            <div className=''>
                <Slider></Slider>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    allAds.filter(ad => ad.availability === "Available").map(ad => <AdCard key={ad._id} ad={ad}></AdCard>)
                }
            </div>
        </div>
    );
};

export default Home;