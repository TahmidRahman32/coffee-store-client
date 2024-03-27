import { useContext } from "react";
import { authContext } from "../provider/AuthContext";
import Swal from "sweetalert2";

const SignUp = () => {
   const { crateUser } = useContext(authContext);
   const handleSignUp = (e) => {
      e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;
      console.log(email, password);
      crateUser(email, password)
         .then((result) => {
            console.log(result.user);
            const createdAt = result.user.metadata.creationTime;
            const displayName = result.user?.displayName;
            const user = { email, createdAt: createdAt, displayName: displayName };
            fetch("http://localhost:5000/user", {
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
                        title: "Success!",
                        text: "Your file has been successfully.",
                        icon: "success",
                     });
                     form.reset();
                  }
               });
         })
         .then((error) => {
            console.log(error);
         });
   };
   return (
      <div>
         <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
               <div className="text-center ">
                  <h1 className="text-5xl font-bold">SignUp now!</h1>
               </div>
               <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                  <form onSubmit={handleSignUp} className="card-body">
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                           <a href="#" className="label-text-alt link link-hover">
                              Forgot password?
                           </a>
                        </label>
                     </div>
                     <div className="form-control mt-6">
                        <button className="btn btn-primary text-white">SignUp</button>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
};

export default SignUp;
