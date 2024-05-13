import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import axios from "axios";


const MyFoodReq = () => {

    const { user } = useAuth();
  const [requests, setRequest] = useState([]);
  useEffect(() => {
    getData();
  }, [user]);

  const getData = async () => {
    const { data } = await axios(`https://food-donation-servers.vercel.app/request/${user?.email}`);
    setRequest(data);
    
  };
    return (
        <div>
      <section className="container px-4 mx-auto pt-12">
        <div className="flex items-center gap-x-3">
          <h2 className="text-lg font-medium text-gray-800 ">
          My Food Request
          </h2>
        </div>
        <div className="flex flex-col mt-6">
          <div className="-mx-4 -my-2 md:overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200  md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-[#fff6f5]">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right"
                      >
                        <div className="flex items-center gap-x-3">
                          <span>Donar Name</span>
                        </div>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                      >
                        <span>Pickup Location</span>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                      >
                        <button className="flex items-center gap-x-2">
                          <span>Expire Date</span>
                        </button>
                      </th>

                      <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                      Request Date
                      </th>
                    </tr>
                  </thead>
                  <tbody className='bg-white divide-y divide-gray-200 '>
                  {requests.map(request => (
                    <tr key={request._id}>
                      <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                        <span className="font-bold text-[#db4437]">{request.donator_name}</span>
                      </td>
                      <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                        {request.pickup_location}
                      </td>
                      <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                        {request.expired_date}
                      </td>
                      <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                        {request.request_date}
                      </td>

                    </tr>
                  ))}
                </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    );
};

export default MyFoodReq;