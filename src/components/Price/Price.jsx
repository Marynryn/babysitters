import css from "./Price.module.css"
import ButtonFavorite from "components/ButtonFavorite/ButtonFavorite";


const Price = ({ props }) => {


    return (
        <div className={css.price_box}>
            <p className={css.price}>Price / 1 hour{props.price_per_hour}</p>
            <ButtonFavorite props={props} />


        </div>
    );
};

export default Price;