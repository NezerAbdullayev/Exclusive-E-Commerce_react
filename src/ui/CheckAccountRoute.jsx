import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function CheckAccountRoute({ children, redirectTo }) {
    const isLoggedIn = useSelector((state) => state.user.user);

    return isLoggedIn ? children: <Navigate to={redirectTo} />  ;
}

export default CheckAccountRoute;


