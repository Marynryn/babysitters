import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectVisibleCards } from "store/selectors";

import css from "./AdvertsList.module.css"
import { fetchData } from "firebase.js";
import Button from "components/Button/Button";
import { fetchCards } from "store/reducer";
import CardItem from "components/CardItem/CardItem";
const CardsList = () => {
    const dispatch = useDispatch();
    const visibleCards = useSelector(selectVisibleCards);
    console.log(visibleCards)
    const [displayedCards, setDisplayedCards] = useState([]);
    const cardsPerPage = 4;
    useEffect(() => {
        const fetchAndDispatchData = async () => {
            const cards = await fetchData();

            if (cards) {
                dispatch(fetchCards(cards));
            }
        };

        fetchAndDispatchData();
    }, [dispatch]);

    useEffect(() => {

        setDisplayedCards(visibleCards.slice(0, cardsPerPage));
    }, [visibleCards, cardsPerPage]);

    const handleLoadMore = () => {

        const nextPage = Math.ceil(displayedCards.length / cardsPerPage) + 1;
        const startIndex = (nextPage - 1) * cardsPerPage;
        const endIndex = Math.min(startIndex + cardsPerPage, visibleCards.length);

        setDisplayedCards(prevCards => [
            ...prevCards,
            ...visibleCards.slice(startIndex, endIndex)
        ]);
    };

    return (
        <div className={css.adverts_list}>
            <ul>
                {displayedCards.map((card) => (
                    <li key={card.name} className="">
                        <CardItem props={card} />
                    </li>
                ))}
            </ul>
            {displayedCards.length < visibleCards.length && (
                <Button type={"button"} onClick={handleLoadMore}>
                    Load more
                </Button>
            )}
        </div>
    );
};

export default CardsList;
