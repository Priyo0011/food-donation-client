import { useLoaderData, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import axios from "axios";

const UpdateFood = () => {
    const { user } = useAuth();
    const navigate = useNavigate()
    const [startDate, setStartDate] = useState(new Date());
    const food = useLoaderData()
    const {
        food_image,
        food_name,
        food_quantity,
        pickup_location,
        additional_notes,
        _id
      } = food || {};

      const handleFormSubmit = async e => {
        e.preventDefault()
        const food_name = e.target.food_name.value;
    const food_image = e.target.food_image.value;
    const donator_name =e.target.donator_name.value;
    const email =e.target.email.value;
    const food_quantity =e.target.food_quantity.value;
    const pickup_location = e.target.pickup_location.value;
    const food_status = e.target.food_status.value;
    const additional_notes = e.target.additional_notes.value;
    const expired_date = e.target.expired_date.value;

    const foodData ={
        food_image,
        food_name,
        donator_name,
        food_quantity,
        pickup_location,
        expired_date,
        additional_notes,
        food_status,
        donator:{
          email,
        },
        donator_image: user?.photoURL
      }
      try {
        const { data } = await axios.put(`http://localhost:9000/food/${_id}`,foodData)
        console.log(data)
        toast.success('Food Data Update Successfully!')
        navigate('/manage-foods')
      } catch (err) {
        console.log(err)
        toast.error(err.message)
      }
    }
    return (
        <div>
      <div className="bg-[#fff9f9] mt-10">
        <div className="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center justify-center w-1/2 px-5 py-1 text-sm text-white transition-colors duration-200 bg-[#db4437] border  gap-x-2 sm:w-auto   hover:bg-gray-100 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 rtl:rotate-180 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>

            <span>Go back</span>
          </button>
        </div>
        <h2 className="text-3xl font-extrabold text-center p-10 text-[#db4437] ">
          Update a Food
        </h2>
        <div className="md:px-24 px-8   md:pb-24 pb-8">
          <form onSubmit={handleFormSubmit}>
            <div className="md:flex mb-8">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text font-bold">Food Name</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="food_name"
                    placeholder="add your food name"
                    className="input input-bordered w-full"
                    defaultValue={food_name}
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
                    placeholder="Photo URL"
                    className="input input-bordered w-full"
                    defaultValue={food_image}
                  />
                </label>
              </div>
            </div>

            <div className="md:flex mb-8">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text font-bold">Food Quantity</span>
                </label>
                <label className="input-group">
                  <input
                    type="number"
                    name="food_quantity"
                    placeholder="add quantity food"
                    className="input input-bordered w-full"
                    defaultValue={food_quantity}
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2 md:ml-4">
                <label className="label">
                  <span className="label-text font-bold">Pickup Location</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="pickup_location"
                    placeholder="add pickup location"
                    className="input input-bordered w-full"
                    defaultValue={pickup_location}
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
                  <DatePicker
                    name="expired_date"
                    className="border p-3 rounded-md"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2 md:ml-4">
                <label className="label">
                  <span className="label-text font-bold">Food Status</span>
                </label>
                
                <input
                  type="text"
                  name="food_status"
                  defaultValue="available"
                  className="block w-full p-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                  disabled
                />

              </div>
            </div>
            <div className="md:flex mb-8">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text font-bold">Donator Name</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="donator_name"
                    className="block w-full p-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                    defaultValue={user?.displayName}
                    disabled
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2 md:ml-4">
                <label className="label">
                  <span className="label-text font-bold">Donator Email</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="email"
                    className="block w-full p-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                    defaultValue={user?.email}
                    disabled
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
                    placeholder="additional notes"
                    className="input input-bordered w-full h-20"
                    defaultValue={additional_notes}
                  />
                </label>
              </div>
            </div>
            <input
              type="submit"
              value="Update Food"
              className="btn btn-block bg-[#db4437] text-white"
            />
          </form>
        </div>
      </div>
    </div>
    );
};

export default UpdateFood;