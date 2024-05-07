

import CardsList from "components/CardsList/CardsList";
import Filters from "components/Filters/Filters";
import Header from "components/Header.jsx/Header";


import { useSelector } from 'react-redux';
import { selectFavorites } from "store/selectors";

const Favorites = () => {
    const favoriteCards = useSelector(selectFavorites);
    const reverseCards = favoriteCards.reverse();

    return (
        <div className=" px-32  pb-24 w-screen bg-light-gray" >
            <div className="  lg:justify-between bg-teal-900 text-white py-5 -mx-32  lg:px-32 " >
                <Header />
            </div >
            <div className="pt-16">
                <Filters />
            </div>
            <div>
                <CardsList props={reverseCards} />
            </div>
        </div>
    );
}

export default Favorites;
