import React from 'react';
import DonationForm from '../components/DonationForm';
import Topbar from '../components/Topbar';

function Home() {
    return (
        <div>
            <Topbar />
            <p className='banner'><img src='logo.jpg' /></p>
        </div>
    );
}

export default Home;