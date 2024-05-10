
import Header from "components/Header.jsx/Header";

import CardsList from "components/CardsList/CardsList";
import Filters from "components/Filters/Filters";


const Nannies = () => {


    return (<>
        <div className="  lg:justify-between bg-teal-900 text-white  " style={{ padding: "20px calc(128/1440 * 100%) " }} >
            <Header />
        </div >
        <div className="   bg-light-gray" style={{ padding: "0 calc(128/1440 * 100%) 96px" }} >

            <div className="pt-16">
                <Filters />
            </div>
            <div>
                <CardsList />
            </div>
        </div ></>
    )
}
export default Nannies;