import sprite from "svg/symbol-defs.svg";
import css from "./Location.module.css"
const Location = ({ props }) => {
    return (<div className={css.location}>
        <svg className={css.location_icon} width={16} height={16}>
            <use href={`${sprite}#icon-map-pin`} />
        </svg>
        <p className={css.name_location}>{props.location}</p>
    </div >

    )
}
export default Location;