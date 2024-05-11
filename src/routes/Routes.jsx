import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import AvailableFoods from "../pages/AvailableFoods";
import Login from "../pages/Login";
import Register from "../pages/Register";
import FoodDetails from "../pages/FoodDetails";
import AddFood from "../pages/AddFood";
import ManageFoods from "../pages/ManageFoods";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader:()=>fetch(`http://localhost:9000/foods`)
      },
      {
        path: "/available-foods",
        element: <AvailableFoods></AvailableFoods>,
        loader:()=>fetch(`http://localhost:9000/foods`)
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
        element: <FoodDetails></FoodDetails>,
        loader:({params})=>fetch(`http://localhost:9000/food/${params.id}`)
      },
      {
        path: "/add-food",
        element: <AddFood></AddFood>,
      },
      {
        path: "/manage-foods",
        element: <ManageFoods></ManageFoods>,
      },
    ],
  },
]);
export default router;
