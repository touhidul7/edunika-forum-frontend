import { Navigate, useLocation } from 'react-router';
import Loader from '../components/Loader';
import { useAuth } from './context/AuthContext';

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const { user, loading } = useAuth();

    // if (loading) return <Loader />;

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default PrivateRoute;
