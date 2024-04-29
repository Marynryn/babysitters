
import CardItem from "components/CardItem/CardItem";
import Header from "components/Header.jsx/Header";


import { useSelector } from 'react-redux';
import { selectFavorites } from "store/selectors";

const Favorites = () => {
    const favoriteCards = useSelector(selectFavorites);

    return (
        <div>
            <Header />
            {/* <Filters/> */}
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
