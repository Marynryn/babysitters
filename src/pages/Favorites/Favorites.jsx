
import CardItem from "components/CardItem/CardItem";


import { useSelector } from 'react-redux';
import { selectFavorites } from "store/selectors";

const Favorites = () => {
    const favoriteCards = useSelector(selectFavorites);
    console.log(favoriteCards);
    return (
        <div>
            <h2>Favorite Adverts</h2>
            <ul>
                {favoriteCards.map((item) => (
                    <li key={item.name}>
                        <CardItem props={item} />
                    </li>
                ))}
            </ul>

        </div>
    );
}

export default Favorites;
