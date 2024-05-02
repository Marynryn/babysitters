import Button from "components/Button/Button";
import Header from "components/Header.jsx/Header";
import css from "./Home.module.css"
import sprite from "svg/symbol-defs.svg";
import { NavLink } from 'react-router-dom';


export default function Home() {


    return (
        <div className=" m-4 bg-teal-900 bg-cover bg-center text-white h-screen rounded-3xl  " style={{ backgroundImage: 'url(/img/bg1.png)' }}>
            <div className={css.bg}>
                <div className="pb-12 pt-5  px-4">
                    <Header />
                    <h1 className="font-medium text-4xl mt-10 md:text-5xl lg:text-6xl xl:text-7xl">Make Life Easier for the Family:</h1>
                    <p className="text-2xl font-normal mt-7 mb-16">Find Babysitters Online for All Occasions</p>
                    <NavLink to="/nannies" >
                        <Button ><span className="flex items-center px-8 py-4">Get started
                            <svg className="ml-4 fill-white " width={16} height={16}>
                                <use href={`${sprite}#icon-arrow-up-right2`} />

                            </svg></span>
                        </Button>
                    </NavLink>

                </div>
            </div>
        </div>
    );
}
