import FoodCard from "./FoodCard";


const FoodsSection = ({foods}) => {
    return (
        <div>
            <div className="my-10">
                <h1 className="text-xl md:text-3xl text-[#db4437] font-bold text-center">Featured Foods</h1>
                <p className="mt-8 text-center">Donating wholesome food for human consumption diverts <br /> food waste from landfills and puts food on the table for families in need.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {
                
                foods.map(food=>(<FoodCard key={food._id} food={food}></FoodCard>))
            }
            </div>
        </div>
    );
};

export default FoodsSection;