import logo1 from "../../../images/more/logo1.png";

const Header = () => {
   return (
      <div className="bg-primaryColor rounded text-center">
         <div className="flex justify-center items-center">
            <img className="w-16 " src={logo1} alt="" />
            <h2 className="text-white font-song text-3xl">Espresso Emporium</h2>
         </div>
      </div>
   );
};

export default Header;
