import React from 'react';
import Banner from '../components/Banner';
import SummaryCard from '../components/SummaryCard';
import ProfileData from '../components/ProfileData';

const HomePage = () => {
    return (
        <div>
            <Banner />
            <SummaryCard />
            <ProfileData />
        </div>
    );
};

export default HomePage;