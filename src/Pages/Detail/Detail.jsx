import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Header from '../Shared/Header';
import NewsCards from '../Shared/News Cards/NewsCards';
import LeftNav from '../Shared/LeftNav';
import RightNav from '../Shared/RightNav';

const Detail = () => {
    const allnews = useLoaderData()
    const { id } = useParams()

    const thisNews = allnews?.filter(news => news._id === id)
    console.log(thisNews);
    const { category_id, title, image_url, details } = thisNews[0]

    return (
        <div>
            <Header></Header>
            <div className='grid grid-cols-4'>
                {/* details div */}
                <div className='lg:col-span-3 p-4'>
                    <div>
                        <img src={image_url} className='w-full' alt="" />
                    </div>
                    <h1 className='text-3xl font-medium my-6'>{title}</h1>
                    <p>{details}</p>
                    <button className='btn my-4 bg-rose-600 normal case text-white hover:text-black'>  All news in this category</button>
                    <div className="flex">
                        <NewsCards slice={3} flex={true}></NewsCards>
                    </div>
                </div>
                {/* left nav div  */}
                <div>
                    {/* <LeftNav></LeftNav> */}
                    <RightNav></RightNav>
                </div>
            </div>
        </div>
    );
};

export default Detail;