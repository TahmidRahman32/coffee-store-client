import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import Swal from "sweetalert2";
const AddCoffee = () => {
   const handleSubmit = (e) => {
      e.preventDefault();
      const form = e.target;
      const name = form.name.value;
      const supplier = form.supplier.value;
      const category = form.category.value;
      const chef = form.chef.value;
      const taste = form.taste.value;
      const details = form.details.value;
      const url = form.url.value;
      const user = { name, supplier, category, chef, taste, details, url };
      console.log(user);

      fetch("http://localhost:5000/addCoffee", {
         method: "POST",
         headers: {
            "content-type": "application/json",
         },
         body: JSON.stringify(user),
      })
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            if (data.insertedId) {
               Swal.fire({
                  title: "success!",
                  text: "User Create a successfully",
                  icon: "success",
                  confirmButtonText: "Cool",
               });
            } else {
               Swal.fire({
                  title: "Error!",
                  text: "Do you want to continue",
                  icon: "error",
                  confirmButtonText: "Cool",
               });
            }
         });
   };
   return (
      <div>
         <div className="mb-8">
            <Link to={"/"}>
               <h2 className=" mt-4 font-song flex items-center gap-1">
                  <IoArrowBack /> Back to home
               </h2>
            </Link>
         </div>
         <div className="">
            <div className="text-center my-6">
               <h1 className="text-3xl font-song">Added Coffee</h1>
            </div>
            <form onSubmit={handleSubmit}>
               <div className="grid md:grid-cols-2 gap-8">
                  <div>
                     <label className="  ">
                        <div className="label">
                           <span className="font-song">Name</span>
                        </div>
                        <input type="text" placeholder="Enter coffee name" name="name" className="input input-bordered w-full" />
                     </label>
                     <label className="form-control w-full ">
                        <div className="label">
                           <span className="font-song">Supplier</span>
                        </div>
                        <input type="text" placeholder="Enter coffee supplier" name="supplier" className="input input-bordered w-full " />
                     </label>
                     <label className="form-control w-full ">
                        <div className="label">
                           <span className="font-song">Category</span>
                        </div>
                        <input type="text" placeholder="Enter coffee category" name="category" className="input input-bordered w-full " />
                     </label>
                  </div>
                  <div>
                     <label className="form-control w-full ">
                        <div className="label">
                           <span className="font-song">Chef</span>
                        </div>
                        <input type="text" placeholder="Enter coffee chef" name="chef" className="input input-bordered w-full " />
                     </label>
                     <label className="form-control w-full ">
                        <div className="label">
                           <span className="font-song">Taste</span>
                        </div>
                        <input type="text" placeholder="Enter coffee taste" name="taste" className="input input-bordered w-full " />
                     </label>
                     <label className="form-control w-full ">
                        <div className="label">
                           <span className="font-song">Details</span>
                        </div>
                        <input type="text" placeholder="Enter coffee details" name="details" className="input input-bordered w-full " />
                     </label>
                  </div>
               </div>
               <label className="form-control w-full">
                  <div className="label">
                     <span className="font-song">Photo</span>
                  </div>
                  <input type="url" placeholder="Enter photo URL" name="url" className="input input-bordered w-full " />
               </label>

               <input type="submit" value="Add User" className="input input-bordered w-full mt-6 bg-btnColor text-xl font-song" />
            </form>
         </div>
      </div>
   );
};

export default AddCoffee;
