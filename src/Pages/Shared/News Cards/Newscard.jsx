import { CgCalendarDates } from 'react-icons/cg';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const Newscard = ({ card }) => {
    const { _id: id, category_id, rating, total_view, title, author, thumbnail_url, image_url, details } = card
    const { name, published_date, img } = author
    const { number } = rating
    return (
        <div className="space-y-3 p-2 text-lg max-w-xs">
            <div className="">
                <img className="w-full" src={image_url} alt="" />
            </div>
            <Link
                to={`/details/${id}`}
                className='font-bold'>{title}</Link>
            <div className="flex justify-between text-lg">
                <button className='btn btn-ghost'>{name}</button>
                <span className='flex items-center gap-1'><CgCalendarDates ></CgCalendarDates>{published_date}</span>
            </div>
        </div>
    );
};

export default Newscard;
Newscard.propTypes = {
    card: PropTypes.object
}
