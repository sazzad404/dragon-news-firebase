import { createBrowserRouter } from "react-router";
import HomeLayout from "../../layouts/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";

const route = createBrowserRouter(
    [
        {
            path:"/",
            Component: HomeLayout,
            children:[
                {
                    path: "",
                    element: <Home></Home>
                },
                {
                    path: "/category/:id",
                    element: <CategoryNews></CategoryNews>,
                    loader: ()=> fetch("/news.json")
                }
            ]
        },
        {
            path:"/auth",
            element: <h2>auth</h2>
        },
        {
            path:"/news",
            element: <h2>news</h2>
        },
        {
            path:"/*",
            element: <h2>error</h2>
        }
    ]
)

export default route