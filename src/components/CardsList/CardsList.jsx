import React, { useEffect, useState } from "react";
import { useDispatch, } from "react-redux";

import { fetchData } from "firebase.js";
import Button from "components/Button/Button";
import { fetchCards } from "store/reducer";
import CardItem from "components/CardItem/CardItem";


const CardsList = ({ props }) => {
    const dispatch = useDispatch();

    const [displayedCards, setDisplayedCards] = useState([]);
    const cardsPerPage = 3;
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

        setDisplayedCards(props.slice(0, cardsPerPage));
    }, [props, cardsPerPage]);

    const handleLoadMore = () => {

        const nextPage = Math.ceil(displayedCards.length / cardsPerPage) + 1;
        const startIndex = (nextPage - 1) * cardsPerPage;
        const endIndex = Math.min(startIndex + cardsPerPage, props.length);

        setDisplayedCards(prevCards => [
            ...prevCards,
            ...props.slice(startIndex, endIndex)
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
            {displayedCards.length < props.length && (
                <div className="mt-16 text-center">
                    <Button type={"button"} onClick={handleLoadMore} ><span className=" text-white" style={{ padding: "14px 40px" }}>Load more</span>

                    </Button>
                </div>
            )}
        </div>
    );
};

export default CardsList;
