import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import FoodsSection from "../components/FoodsSection";


const Home = () => {
    const foods = useLoaderData()
    
    return (
        <div>
            <Banner></Banner>
            <FoodsSection foods={foods}></FoodsSection>
        </div>
    );
};

export default Home;