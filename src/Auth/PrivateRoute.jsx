import PropTypes from 'prop-types';
import { Navigate, useLocation } from 'react-router';
import Loader from '../components/Loader';

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const user = JSON.parse(localStorage.getItem("user") || "null");
    // const user = {
    //     username: "user",
    //     password: "user"
    // }
    const AuthEmail = "user@gmail.com";
    const AuthPassword = "user";
    const loading = false;
    if (loading) {
        return (
            <Loader />
        );
    }

    // Ensure user exists and has an email property before rendering children
    if (user) {
        if (AuthEmail == user.email /* AuthPassword == user.password */) {

            return children;
        } else {
            return <Navigate to="/login" state={{ from: location }} replace />;
        }
    } else {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

};

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PrivateRoute;