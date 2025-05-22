import React from 'react';
import Slider from '../components/Slider';
import { useLoaderData } from 'react-router';
import AdCard from '../components/AdCard';
import FindingCounter from '../components/FindingCounter';
import PopularCities from '../components/PopularCities';

const Home = () => {
    const allAds = useLoaderData();
    console.log(allAds);
    return (
        <div className='space-y-6 my-6'>
            <div className=''>
                <Slider></Slider>
            </div>
            <h1 className="font-bold text-3xl lg:text-5xl text-center my-10 text-secondary">Featured Roommates Post</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
                {
                    allAds.filter(ad => ad.availability === "Available").map(ad => <AdCard key={ad._id} ad={ad}></AdCard>)
                }
            </div>
            <div>
                <PopularCities></PopularCities>
            </div>
            <div>
                <FindingCounter></FindingCounter>
            </div>
        </div>
    );
};

export default Home;