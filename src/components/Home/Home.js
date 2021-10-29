import React from 'react';
import './Home.css';
import homeBanner from '../../images/homebanner.png';
import Services from '../Services/Services';
import Tour from '../Tour/Tour';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <div className='banner'>
                <img src={homeBanner} alt="" />
                <h1>Explore Your <br /> Summer Holiday<br /> with us & Enjoy</h1>
            </div>
            <Services></Services>
            <Reviews></Reviews>
            <Tour></Tour>
        </div>
    );
};

export default Home;