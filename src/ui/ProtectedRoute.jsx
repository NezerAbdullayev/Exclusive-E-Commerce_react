import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children, redirectTo }) {
    const isLoggedIn = useSelector((state) => state.user.user);

    return isLoggedIn ? <Navigate to={redirectTo} /> : children;
}

export default ProtectedRoute;
