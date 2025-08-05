import { Navigate, useLocation } from 'react-router';
import Loader from '../components/Loader';
import { useAuth } from './context/AuthContext';
import { useEffect } from 'react';

const PrivateRoute = ({ children }) => {
    const location = useLocation();
   const userId = sessionStorage.getItem("userId");


   

    if (!userId) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default PrivateRoute;
