import React from 'react';
import './Home.css';
import homeBanner from '../../images/homebanner.png';


const Home = () => {
    return (
        <div>
            <div className='banner'>
                <img src={homeBanner} alt="" />
                <h1>Explore Your <br /> Summer Holiday<br /> with us & Enjoy</h1>
            </div>
        </div>
    );
};

export default Home;