import { IoArrowBack } from "react-icons/io5";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
   const coffee = useLoaderData();
   const { _id, url, name, chef, supplier, category, taste, details } = coffee;

   const handleUpdateCoffee = (e) => {
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

      fetch(`http://localhost:5000/addCoffee/${_id}`, {
         method: "PUT",
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
                  text: "Coffee Update a successfully",
                  icon: "success",
                  confirmButtonText: "Cool",
               });
            } else {
               if (data.modifiedCount > 0) {
                  Swal.fire({
                     position: "center",
                     icon: "success",
                     title: "Coffee Update a successfully",
                     showConfirmButton: false,
                     timer: 1500,
                  });
               }
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
         <div className="text-center my-6">
            <h1 className="text-3xl font-song">Update Coffee</h1>
         </div>
         <form onSubmit={handleUpdateCoffee}>
            <div className="grid md:grid-cols-2 gap-8">
               <div>
                  <label className="  ">
                     <div className="label">
                        <span className="font-song">Name</span>
                     </div>
                     <input type="text" placeholder="Enter coffee name" name="name" defaultValue={name} className="input input-bordered w-full" required />
                  </label>
                  <label className="form-control w-full ">
                     <div className="label">
                        <span className="font-song">Supplier</span>
                     </div>
                     <input type="text" placeholder="Enter coffee supplier" name="supplier" defaultValue={supplier} required className="input input-bordered w-full " />
                  </label>
                  <label className="form-control w-full ">
                     <div className="label">
                        <span className="font-song">Category</span>
                     </div>
                     <input type="text" placeholder="Enter coffee category" name="category" defaultValue={category} className="input input-bordered w-full " required />
                  </label>
               </div>
               <div>
                  <label className="form-control w-full ">
                     <div className="label">
                        <span className="font-song">Chef</span>
                     </div>
                     <input type="text" placeholder="Enter coffee chef" name="chef" defaultValue={chef} className="input input-bordered w-full " required />
                  </label>
                  <label className="form-control w-full ">
                     <div className="label">
                        <span className="font-song">Taste</span>
                     </div>
                     <input type="text" placeholder="Enter coffee taste" name="taste" defaultValue={taste} className="input input-bordered w-full " />
                  </label>
                  <label className="form-control w-full ">
                     <div className="label">
                        <span className="font-song">Details</span>
                     </div>
                     <input type="text" placeholder="Enter coffee details" name="details" defaultValue={details} className="input input-bordered w-full " />
                  </label>
               </div>
            </div>
            <label className="form-control w-full">
               <div className="label">
                  <span className="font-song">Photo</span>
               </div>
               <input type="url" placeholder="Enter photo URL" name="url" className="input input-bordered w-full " defaultValue={url} />
            </label>

            <input type="submit" value="Add User" className="input input-bordered w-full mt-6 bg-btnColor text-xl font-song" />
         </form>
      </div>
   );
};

export default UpdateCoffee;
