import { useEffect, useState } from 'react';
import Newscard from './Newscard';
import PropTypes from 'prop-types'
const NewsCards = ({ slice, flex }) => {
    const [newsCards, setNewsCards] = useState([])
    useEffect(() => {
        fetch('/news.json')
            .then(res => res.json())
            .then(data => setNewsCards(data))
    }, [])
    // console.log(newsCards)
    return (
        <div className={flex ? 'flex' : ''}>
            {
                newsCards.slice(0, slice).map(card => <Newscard key={card._id} card={card}></Newscard>)
            }
        </div>
    );
};

export default NewsCards;
NewsCards.propTypes = {
    slice: PropTypes.number,
    flex: PropTypes.bool
}