import css from './ButtonFavorite.module.css';
import sprite from "svg/symbol-defs.svg";
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToFavorites, removeFromFavorites } from 'store/reducer';

const ButtonFavorite = ({ props }) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setIsFavorite(storedFavorites.some(favorite => favorite.name === props.name));
    }, [props.name]);

    const toggleFavorite = () => {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        if (isFavorite) {
            const updatedFavorites = favorites.filter(favorite => favorite.name !== props.name);
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
            dispatch(removeFromFavorites(props.name));
        } else {
            favorites.push(props);
            localStorage.setItem('favorites', JSON.stringify(favorites));
            dispatch(addToFavorites(props));
        }
        setIsFavorite(!isFavorite);
    };

    return (
        <button className={css.heart} onClick={toggleFavorite}>
            <svg className={isFavorite ? "fill-white stroke-black stroke-width-1" : " fill-teal-900 stroke-teal-900"} width={26} height={26}>
                <use href={`${sprite}#icon-heart`} />
            </svg>
        </button>
    );
};

export default ButtonFavorite;
