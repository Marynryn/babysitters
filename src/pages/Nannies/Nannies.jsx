import { selectVisibleCards } from "store/selectors";
import Header from "components/Header.jsx/Header";
import { useSelector } from "react-redux";
import CardsList from "components/CardsList/CardsList";
import Filters from "components/Filters/Filters";


const Nannies = () => {

    const visibleCards = useSelector(selectVisibleCards);
    return (
        <div className=" px-32  pb-24 w-screen bg-light-gray" >
            <div className="  lg:justify-between bg-teal-900 text-white py-5 -mx-32  lg:px-32 " >
                <Header />
            </div >
            <div className="pt-16">
                <Filters />
            </div>
            <div>
                <CardsList props={visibleCards} />
            </div>
        </div >
    )
}
export default Nannies;