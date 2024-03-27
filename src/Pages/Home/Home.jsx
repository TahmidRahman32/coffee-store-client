import icon1 from "../../../images/icons/1.png";
import icon2 from "../../../images/icons/2.png";
import icon3 from "../../../images/icons/3.png";
import icon4 from "../../../images/icons/4.png";
import { RiCupLine } from "react-icons/ri";
import { Link, useLoaderData } from "react-router-dom";
import CoffeeCard from "../AddCoffee/CoffeeCard";
// import { useState } from "react";
// import cardImg2 from "../../../images/2.png";
// import cardImg3 from "../../../images/3.png";
// import cardImg4 from "../../../images/4.png";
// import cardImg5 from "../../../images/5.png";
// import cardImg6 from "../../../images/6.png";

const Home = () => {
   const mongoData = useLoaderData();
   console.log(mongoData);
   // const [coffees, setCoffees] = useState(mongoData);

   return (
      <div>
         <div className="bgImg md:h-[600px] md:flex md:justify-end items-center mt-8">
            <div className="m-3 md:m-0">
               <h3 className="text-white  text-2xl font-song font-bold md:mr-56">Would you like a Cup of Delicious Coffee?</h3>
               <p className="text-white">
                  <small>
                     Its coffee time - Sip & Savor - Relaxation in every sip! Get <br /> the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful <br /> moments and make them memorable.
                  </small>
               </p>
               <button className="bg-btnColor py-1 px-2 rounded text-ms my-3 font-song">Learn More</button>
            </div>
         </div>
         <div className="md:flex">
            <div className="md:p-16 p-3 space-y-1">
               <img src={icon1} alt="" />
               <h2 className="font-song text-xl font-semibold">Awesome Aroma</h2>
               <p>You will definitely be a fan of the design & aroma of your coffee</p>
            </div>
            <div className="md:p-16 p-3 space-y-1">
               <img src={icon2} alt="" />
               <h2 className="font-song text-xl font-semibold">Awesome Aroma</h2>
               <p>You will definitely be a fan of the design & aroma of your coffee</p>
            </div>
            <div className="md:p-16 p-3 space-y-1">
               <img src={icon3} alt="" />
               <h2 className="font-song text-xl font-semibold">Awesome Aroma</h2>
               <p>You will definitely be a fan of the design & aroma of your coffee</p>
            </div>
            <div className="md:p-16 p-3 space-y-1">
               <img src={icon4} alt="" />
               <h2 className="font-song text-xl font-semibold">Awesome Aroma</h2>
               <p>You will definitely be a fan of the design & aroma of your coffee</p>
            </div>
         </div>
         <div>
            <div className="text-center mb-8">
               <p className="text-primaryColor">--- Sip & Savor ---</p>
               <h2 className="text-primaryColor font-song text-2xl">Our Popular Products</h2>
               <p className="flex justify-center">
                  <Link className="" to={"/addCoffee"}>
                     <button className="bg-btnColor py-1 px-3 rounded font-song mt-4 flex items-center gap-1 text-primaryColor">
                        Add Coffee
                        <span className="font-song">
                           <RiCupLine />
                        </span>
                     </button>
                  </Link>
               </p>
            </div>
            <div className=" grid md:grid-cols-2 gap-8">
               {mongoData.map((user) => (
                  <CoffeeCard
                   key={user._id} 
                  coffee={user}
                 
                  ></CoffeeCard>
               ))}
            </div>
         </div>
      </div>
   );
};

export default Home;
