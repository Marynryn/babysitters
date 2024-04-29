import css from "./ReviewsItem.module.css"
import sprite from "svg/symbol-defs.svg";
const ReviewItem = ({ reviewerName, reviewerRating, comment }) => {


    return (
        <div className={css.review}>
            <div className={css.rating_box}>
                <div className={css.avatar}>{reviewerName.charAt(0)}</div>


                <div className={css.details}>
                    <p className={css.name}>{reviewerName}</p>
                    <div className="flex">
                        <svg className="" width={16} height={16}>
                            <use href={`${sprite}#icon-star-full`} />
                        </svg>
                        <p className={css.rating}>{reviewerRating}</p></div>
                </div>
            </div>
            <div className={css.comment}>{comment}</div>

        </div>
    );
};
export default ReviewItem;