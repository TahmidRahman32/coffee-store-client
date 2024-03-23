import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './Root/Root';
import Home from './Pages/Home/Home';
import ErrorPage from './ErrorPage/ErrorPage';
import AddCoffee from './Pages/AddCoffee/AddCoffee';
import UpdateCoffee from './UpdateCoffee/UpdateCoffee';

const router = createBrowserRouter([
   {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
         {
            path: "/",
            element: <Home></Home>,
            loader: () => fetch("http://localhost:5000/addCoffee"),
         },
         {
            path: "/addCoffee",
            element: <AddCoffee></AddCoffee>,
         },
         {
            path: "/updateCoffee/:id",
            element: <UpdateCoffee></UpdateCoffee>,
            loader: ({params}) => fetch(`http://localhost:5000/addCoffee/${params.id}`),
         },
      ],
   },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <RouterProvider router={router} />
   </React.StrictMode>
);
