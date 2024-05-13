import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import FoodsSection from "../components/FoodsSection";
import OurMission from "../components/OurMission";
import About from "../components/About";


const Home = () => {
    const foods = useLoaderData()
    
    return (
        <div>
            <Banner></Banner>
            <FoodsSection foods={foods}></FoodsSection>
            <OurMission></OurMission>
            <About></About>
        </div>
    );
};

export default Home;