
import Header from "components/Header.jsx/Header";

import CardsList from "components/CardsList/CardsList";
import Filters from "components/Filters/Filters";


const Nannies = () => {

    return (
        <div className="">
            <div className=" bg-teal-900 ">
                <Header />
            </div>
            <Filters />
            <CardsList />

        </div>
    )
}
export default Nannies;