import React from 'react';
import Header from '../Shared/Header';
import Nav from '../Shared/Nav';
import RightNav from '../Shared/RightNav';
import LeftNav from '../Shared/LeftNav';
import Slider from './Slider';
import { useLoaderData } from 'react-router-dom';
import News from './News';

const Home = () => {
    const Allnews = useLoaderData()
    console.log(Allnews);
    return (
        <div>
            <Header></Header>
            <Slider></Slider>
            <Nav></Nav>
            <h1 className='font-poppins font-bold text-4xl'>home </h1>


            <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
                <div className='border'>
                    <LeftNav></LeftNav>
                </div>

                {/* news articles  */}
                <div className='md:col-span-2 border'>
                    {
                        Allnews?.slice(0, 6).map(news => <News key={news._id} news={news}></News>)
                    }

                </div>
                <div className='border '>
                    <RightNav></RightNav>
                </div>
            </div>
        </div>
    );
};

export default Home;