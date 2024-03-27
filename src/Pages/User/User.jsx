import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";

const User = () => {
   const loadedUser = useLoaderData();
   const [users, setUser] = useState(loadedUser);

   const handleDelete = (id) => {
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
            fetch(`http://localhost:5000/user/${id}`, {
               method: "DELETE",
            })
               .then((res) => res.json())
               .then((data) => {
                  console.log(data);
                  if (data.deletedCount === 1) {
                     Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success",
                     });
                     const remainingUser = users.filter((user) => user._id !== id);
                     setUser(remainingUser);
                  }
               });
         }
      });
   };
   return (
      <div>
         <div className="overflow-x-auto">
            <table className="table">
               {/* head */}
               <thead>
                  <tr>
                     <th>Name</th>
                     <th>Email</th>
                     <th>Time</th>
                     <th>Action</th>
                  </tr>
               </thead>
               <tbody>
                  {users.map((user) => (
                     <tr key={user._id}>
                        <td>{user.displayName}</td>
                        <td>{user.email}</td>
                        <td>{user.createdAt}</td>
                        <td>
                           <button className="btn  text-xl" onClick={() => handleDelete(user._id)}>
                              <RiDeleteBin6Line />
                           </button>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default User;
