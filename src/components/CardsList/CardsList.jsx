import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, } from "react-redux";

import { fetchData } from "firebase.js";
import Button from "components/Button/Button";
import { setCards } from "store/reducer";
import CardItem from "components/CardItem/CardItem";
import { selectVisibleCards } from "store/selectors";


const CardsList = () => {
    const dispatch = useDispatch();
    const cards = useSelector(selectVisibleCards)
    const [displayedCards, setDisplayedCards] = useState([]);
    const cardsPerPage = 3;
    useEffect(() => {
        const fetchAndSetData = async () => {
            const cards = await fetchData();

            if (cards) {
                dispatch(setCards(cards));
            }
        };

        fetchAndSetData();
    }, [dispatch]);

    useEffect(() => {

        setDisplayedCards(cards.slice(0, cardsPerPage));
    }, [cards, cardsPerPage]);

    const handleLoadMore = () => {

        const nextPage = Math.ceil(displayedCards.length / cardsPerPage) + 1;
        const startIndex = (nextPage - 1) * cardsPerPage;
        const endIndex = Math.min(startIndex + cardsPerPage, cards.length);

        setDisplayedCards(prevCards => [
            ...prevCards,
            ...cards.slice(startIndex, endIndex)
        ]);
    };

    return (
        <div className="">
            <ul>
                {displayedCards.map((card) => (
                    <li key={card.name} className=" bg-white rounded-3xl mb-8">
                        <CardItem props={card} />
                    </li>
                ))}
            </ul>
            {displayedCards.length < cards.length && (
                <div className="mt-16 text-center">
                    <Button type={"button"} onClick={handleLoadMore} ><span className="flex text-white" style={{ padding: "14px 40px", height: "48px", width: "159px" }}>Load more</span>

                    </Button>
                </div>
            )}
        </div>
    );
};

export default CardsList;
