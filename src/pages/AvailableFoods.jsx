import { useLoaderData } from "react-router-dom";
import FoodCard from "../components/FoodCard";



const AvailableFoods = () => {
    const foods = useLoaderData();
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {
                foods.map(food=>(<FoodCard key={food._id} food={food}></FoodCard>))
            }
            </div>
    );
};

export default AvailableFoods;