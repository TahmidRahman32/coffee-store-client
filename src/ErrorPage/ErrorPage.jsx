import { useRouteError } from 
"react-router-dom";
import logo from '../../images/404/404.gif'


const ErrorPage = () => {
   const error = useRouteError();
   console.log(error);
   return (
      <div>
         <img src={logo} alt="" />
      </div>
   );
};

export default ErrorPage;