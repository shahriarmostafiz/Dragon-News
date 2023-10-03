import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
const News = ({ news }) => {
    const { _id: id, category_id, rating, total_view, title, author, thumbnail_url, image_url, details } = news
    const { name, published_date, img } = author
    const { number } = rating
    return (
        <div className='px-2'>
            {/* info div */}
            <div className='flex justify-between px-4 py-2 bg-slate-100 items-center rounded'>
                {/* author part  */}
                <div className='flex items-center gap-2'>
                    <img src={img} alt="" className='w-16 rounded-full' />
                    <div>
                        <h1>{name}</h1>
                        <p>{published_date}</p>
                    </div>
                </div>
                <div className='flex'>
                    <button className=" btn btn-ghost">Share </button>
                    <button className=" btn btn-ghost">Save</button>
                </div>
            </div>
            {/* detail div */}
            <div className='p-4'>
                <h1 className='text-2xl font-bold py-4'>{title}</h1>
                <div>
                    <img src={image_url} alt="" />
                </div>
                <p className='text-slate-700 p-4'>
                    {details.slice(0, 350)}
                    <Link to={`details/${id}`} className='text-blue font-medium'> Read more  </Link> </p>
            </div>
        </div>
    );
};

export default News;
News.propTypes = {
    news: PropTypes.object
}