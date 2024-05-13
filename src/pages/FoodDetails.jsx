import { useLoaderData, useNavigate } from "react-router-dom";
import { FaMapLocationDot } from "react-icons/fa6";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import toast from "react-hot-toast";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
const FoodDetails = () => {
  const { user } = useAuth();
  const food = useLoaderData();
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());

  const {
    food_image,
    food_name,
    donator_name,
    food_quantity,
    pickup_location,
    expired_date,
    additional_notes,
    _id,
  } = food || {};

  const handleFormSubmission = async (e) => {
    e.preventDefault();

    const reqId = _id;
    const food_name = e.target.food_name.value;
    const food_image = e.target.food_image.value;
    const request_date = e.target.request_date.value;
    const donator_email = e.target.donator_email.value;
    const pickup_location = e.target.pickup_location.value;
    const additional_notes = e.target.additional_notes.value;
    const email = user?.email;
    const requestData = {
      reqId,
      email,
      food_image,
      food_name,
      donator_name,
      food_quantity,
      pickup_location,
      expired_date,
      request_date,
      additional_notes,
      donator_email
    };
    try {
      const { data } = await axios.post(
        "http://localhost:9000/request",
        requestData
      );
      console.log(data);
      toast.success("Food request Successfully!");
      navigate("/my-food-request");
    } catch (err) {
      toast.success(err.response.data);
      console.log(err);
    }
  };

  return (
    <div className=" flex bg-[#fff9f9] shadow-lg mt-10">
      <div className="card-body">
        <div className="px-12">
          <h1 className="text-xl font-extrabold text-[#db4437]">
            Donor Information:
          </h1>
          <h3 className="font-bold">
            Donar Name :<span className="font-normal ml-3">{donator_name}</span>
          </h3>
          <div className="flex items-center">
            <FaMapLocationDot />
            <p className="ml-2 font-light">{pickup_location}</p>
          </div>
        </div>
        <figure>
          <img className="h-[440px] w-full p-12 " src={food_image} alt="" />
        </figure>
        <div className=" ml-12">
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

          <p>
            Additional Notes :
            <span className="ml-2 font-light">{additional_notes}</span>
          </p>
        </div>
      </div>

      <div className="w-1/2 p-8">
        <form onSubmit={handleFormSubmission}>
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold">Food Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="food_name"
                  defaultValue={food.food_name}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                  disabled
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 md:ml-4">
              <label className="label">
                <span className="label-text font-bold">Photo URL</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="food_image"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                  disabled
                  defaultValue={food.food_image}
                />
              </label>
            </div>
          </div>

          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold">Food Donator Email</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="donator_email"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                  disabled
                  defaultValue={food?.donator_email}
                />
              </label>
            </div>
            <div></div>
            <div className="form-control md:w-1/2 md:ml-4">
              <label className="label">
                <span className="label-text font-bold">Food Donator Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="donator_name"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                  disabled
                  defaultValue={food.donator_name}
                />
              </label>
            </div>
          </div>

          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold">Expired Date</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="expired_date"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                  disabled
                  defaultValue={food.expired_date}
                />
              </label>
            </div>
            <div className="flex flex-col gap-2 mt-2 ml-3">
              <label className="label-text font-bold">Request Date</label>
              <DatePicker
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                name="request_date"
                selected={startDate}
                disabled
                onChange={(date) => setStartDate(date)}
              />
            </div>
            <div className="form-control md:w-1/2 md:ml-4">
              <label className="label">
                <span className="label-text font-bold">Pickup Location</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="pickup_location"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                  disabled
                  defaultValue={pickup_location}
                />
              </label>
            </div>
          </div>
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold">Food Request Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                  disabled
                  defaultValue={user?.displayName}
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 md:ml-4">
              <label className="label">
                <span className="label-text font-bold">food Request Email</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="email"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                  disabled
                  defaultValue={user?.email}
                />
              </label>
            </div>
          </div>

          <div className="mb-8">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold">Additional Notes</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="additional_notes"
                  defaultValue={food.additional_notes}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </label>
            </div>
          </div>
          <input
            type="submit"
            value="Request Food"
            className="btn btn-block bg-[#db4437] text-white"
          />
        </form>
      </div>
    </div>
  );
};

export default FoodDetails;
