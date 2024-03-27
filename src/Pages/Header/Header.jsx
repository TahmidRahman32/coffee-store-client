import { NavLink } from "react-router-dom";
import logo1 from "../../../images/more/logo1.png";

const Header = () => {
   return (
      <div className="bg-primaryColor rounded text-center justify-between flex  items-center">
         <div></div>
         <div className="flex justify-center items-center">
            <img className="w-16 " src={logo1} alt="" />
            <h2 className="text-white font-song text-3xl">Espresso Emporium</h2>
         </div>

         <div className="text-xl flex gap-3 mr-2">
            <button className="bg-btnColor py-1 px-3 rounded font-semibold ">
               <NavLink to={"/user"}>User</NavLink>
            </button>
            <button className="bg-btnColor py-1 px-3 rounded font-semibold">
               <NavLink to={"/signIn"}>SignIn</NavLink>
            </button>
            <button className="bg-btnColor py-1 px-3 rounded font-semibold">
               <NavLink to={"/signUp"}>SignUp</NavLink>
            </button>
         </div>
      </div>
   );
};

export default Header;
