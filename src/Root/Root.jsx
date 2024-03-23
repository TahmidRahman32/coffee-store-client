import { Outlet } from "react-router-dom";
import Header from "../Pages/Header/Header";

const Root = () => {
   return (
      <div className="mx-2 md:max-w-7xl md:mx-auto my-8">
         <Header></Header>
         <Outlet></Outlet>
      </div>
   );
};

export default Root;
