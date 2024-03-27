import { FaRegEye } from "react-icons/fa6";

import { LuPencil } from "react-icons/lu";
import { MdOutlineDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
// import cardImg from "../../../images/1.png";
const CoffeeCard = ({ coffee }) => {
   // console.log(coffee);
   const { _id, url, name, chef } = coffee;

   const handleDelete = (_id) => {
      Swal.fire({
         title: "Are you sure?",
         text: "You won't be able to revert this!",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Yes, delete it!",
      }).then((result) => {
         if (result.isConfirmed) {
            fetch(`http://localhost:5000/addCoffee/${_id}`, {
               method: "DELETE",
            })
               .then((res) => res.json())
               .then((data) => {
                  console.log(data);

                  if (data.deletedCount > 1) {
                     Swal.fire({
                        title: "Delete!",
                        text: "Your coffee has been deleted.",
                        icon: "success",
                     });
                    
                  }
               });
         }
      });
   };

   return (
      <div className="card card-side bg-base-100 shadow-xl mb-4">
         <figure>
            <img className="w-72" src={url} alt="Movie" />
         </figure>
         <div className="card-body justify-center">
            <div className="space-y-2">
               <p className="flex items-center justify-between">
                  <p>
                     <span className="font-semibold">Name:</span> {name}
                  </p>
                  <span className="bg-btnColor  py-1 px-3 rounded flex items-center gap-1 font-song ">
                     View <FaRegEye />
                  </span>
               </p>
               <p className="flex items-center justify-between">
                  <p>
                     <span className="font-semibold">Chef:</span> {chef}
                  </p>

                  <span className="bg-primaryColor text-white p-1 rounded flex items-center gap-1 font-song py-1 px-4">
                     {" "}
                     Edit
                     <Link to={`/updateCoffee/${_id}`}>
                        <LuPencil />
                     </Link>
                  </span>
               </p>
               <p className="flex items-center justify-between">
                  <p>
                     <span className="font-semibold">Price:</span> 890 Taka
                  </p>
                  <span onClick={() => handleDelete(_id)} className="bg-red-600 text-white p-1 rounded flex items-center gap-1 font-song py-1 px-2">
                     {" "}
                     Delete
                     <MdOutlineDelete />
                  </span>
               </p>
            </div>
         </div>
      </div>
   );
};

export default CoffeeCard;
