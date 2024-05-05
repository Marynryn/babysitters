import Button from "components/Button/Button";
import Header from "components/Header.jsx/Header";
import css from "./Home.module.css"
import sprite from "svg/symbol-defs.svg";
import { NavLink } from 'react-router-dom';


export default function Home() {


    return (
        <div className=" m-4 bg-teal-900 bg-cover bg-center text-white h-min rounded-3xl lg:m-6 xl:m-8 " style={{ backgroundImage: 'url(/img/bg1.png)' }}>
            <div className={css.bg}>
                <div className="pb-12 pt-5 px-4 m:px-10 lg: xl:px-24 relative">
                    <Header />
                    <div className='w-full bg-stone-200 absolute left-0 mt-4' style={{ height: "1px" }} ></div>
                    <h1 className="font-medium text-4xl  md:text-5xl lg:text-6xl xl:text-7xl m:w-3/6  mt-48">Make Life Easier for the Family:</h1>
                    <p className="text-2xl font-normal mt-7 mb-16 m:w-3/6  ">Find Babysitters Online for All Occasions</p>
                    <div className='mb-8'>
                        <NavLink to="/nannies" >

                            <Button ><span className="flex items-center px-8 py-4 ">Get started
                                <svg className="ml-4 fill-white " width={16} height={16}>
                                    <use href={`${sprite}#icon-arrow-up-right2`} />

                                </svg></span>
                            </Button>

                        </NavLink></div>
                    <div className=" w-64 lg:w-72 lg:h-28 p-4 bg-white rounded-2xl mr-0 ml-auto flex lg:p-8 ">
                        <div className='w-14 h-14  bg-teal-900 rounded-xl flex items-center justify-center mr-4 ' style={{ width: "54px", height: "54px" }}>
                            <svg className='fill-white' width={16} height={16}>
                                <use href={`${sprite}#icon-checkmark`} />
                            </svg>
                        </div>
                        <div>
                            <p className="text-black">Experienced nannies</p>
                            <p className="text-black text-2xl font-medium">15,000</p></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
