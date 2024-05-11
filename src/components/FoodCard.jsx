import { Link } from "react-router-dom";
import { FaMapLocationDot } from "react-icons/fa6";

const FoodCard = ({ food }) => {
  const {
    food_image,
    food_name,
    donator_name,
    food_quantity,
    pickup_location,
    expired_date,
    additional_notes,
    donator_image,
    _id,
  } = food || {};
  return (
    <div className=" bg-base-200 shadow-lg">
      <figure>
        <img className="h-[240px] w-full p-4 " src={food_image} alt="" />
      </figure>
      <div className="card-body">
        <div className="flex items-center">
          <div className="avatar">
            <div className="w-12 rounded-full">
              <img src={donator_image} />
            </div>
          </div>
          <div>
            <h3 className="font-bold uppercase ">
              <span className="font-semibold ml-3">{donator_name}</span>
            </h3>
          </div>
        </div>

        <h2 className="card-title">
          Food Name :<span className="font-light ml-3">{food_name}</span>
        </h2>
        <div className="flex justify-between">
          <p>
            <span>Food Quantity: </span>
            <span className="font-light bg-[#fae0de] rounded-full p-1">
              {food_quantity} box
            </span>
          </p>
          <p>
            <span className="">Expired:</span>
            <span className="font-light bg-[#fae0de] rounded-full p-1">
              {expired_date}
            </span>
          </p>
        </div>

        <div className="flex items-center">
          <FaMapLocationDot />
          <p className="ml-2 font-light">{pickup_location}</p>
        </div>
        <p>
          Additional Notes :
          <span className="ml-2 font-light">{additional_notes}</span>
        </p>
        <div className="mt-8">
          <Link to={`/food/${_id}`}>
            <button className="btn bg-[#db4437] text-white uppercase w-full">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
