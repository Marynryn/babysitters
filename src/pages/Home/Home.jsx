import About from "components/About/About";
import SliderPhoto from "components/SliderPhoto/SliderPhoto";
import Loader from "components/Loader/Loader";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdverts } from "store/operations";
import { selectGetAdverts, selectIsLoading } from "store/selectors";

export default function Home() {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    console.log(isLoading)
    useEffect(() => {
        dispatch(fetchAdverts());
    }, [dispatch]);

    const adverts = useSelector(selectGetAdverts);

    return (
        <div className="">
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <SliderPhoto props={adverts} />
                    <About props={adverts} />
                    {/* <Footer /> */}
                </>
            )}
        </div>
    );
}
