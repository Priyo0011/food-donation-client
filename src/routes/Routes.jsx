import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import AvailableFoods from "../pages/AvailableFoods";
import Login from "../pages/Login";
import Register from "../pages/Register";
import FoodDetails from "../pages/FoodDetails";
import AddFood from "../pages/AddFood";
import ManageFoods from "../pages/ManageFoods";
import UpdateFood from "../pages/UpdateFood";
import MyFoodReq from "../pages/MyFoodReq";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader:()=>fetch(`https://food-donation-servers.vercel.app/foods`)
      },
      {
        path: "/available-foods",
        element: <PrivateRoute>
          <AvailableFoods></AvailableFoods>
        </PrivateRoute>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/food/:id",
        element:<PrivateRoute>
          <FoodDetails></FoodDetails>
        </PrivateRoute>,
        loader:({params})=>fetch(`https://food-donation-servers.vercel.app/food/${params.id}`)
      },
      {
        path: "/update/:id",
        element: <UpdateFood></UpdateFood>,
        loader:({params})=>fetch(`https://food-donation-servers.vercel.app/food/${params.id}`)
      },
      {
        path: "/add-food",
        element: <AddFood></AddFood>,
      },
      {
        path: "/manage-foods",
        element: <ManageFoods></ManageFoods>,
      },
      {
        path: "/my-food-request",
        element: <MyFoodReq></MyFoodReq>,
      },
    ],
  },
]);
export default router;
