import React, { useEffect, useState } from "react";
import Button from "components/Button/Button";
import CardItem from "components/CardItem/CardItem";


const CardsList = ({ props }) => {

    console.log(props)
    const [displayedCards, setDisplayedCards] = useState([]);
    const cardsPerPage = 3;


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
                    <Button type={"button"} onClick={handleLoadMore} ><span className="flex text-white" style={{ padding: "14px 40px", height: "48px", width: "159px" }}>Load more</span>

                    </Button>
                </div>
            )}
        </div>
    );
};

export default CardsList;
