import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../../firebase.config";
export const authContext = createContext(null);
const auth = getAuth(app);
const AuthContext = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);

   const crateUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
   };
   const userInfo = {
      user,
      loading,
      crateUser,
   };
   return <authContext.Provider value={userInfo}>{children}</authContext.Provider>;
};

export default AuthContext;
